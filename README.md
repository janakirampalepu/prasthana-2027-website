# Prasthana website

Marketing website for **Prasthana**, a product engineering and technology company in Hyderabad.
Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and Motion.
There is no backend: all content lives in the code and the contact form opens the visitor's email app.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (for Vercel or any Node host) |
| `npm run build:static` | Static export to `./out` (used for AWS S3 + CloudFront) |
| `npm run lint` | Lint |

## Editing content

Nearly all text lives in [`lib/data.ts`](lib/data.ts): services, technologies, case studies,
team profiles, leadership, job openings, stats and company details. Site address and SEO helpers
are in [`lib/seo.ts`](lib/seo.ts).

## Deployment to AWS (GitHub Actions)

Every push to `main` runs [`.github/workflows/deploy-aws.yml`](.github/workflows/deploy-aws.yml):
lint, static build, upload to S3, then a CloudFront cache invalidation.
The workflow signs in to AWS with a short-lived role (OpenID Connect), so **no AWS access keys are stored in GitHub**.

> Assumes CloudFront serves the site from an **S3 bucket**. DNS (Namecheap) and email
> (Google Workspace) are not touched by this deploy.

### Authorization to configure

Complete these once. Placeholders in `UPPER_CASE` must be replaced with your values.

#### 1. GitHub repository secrets and variables

Repository → **Settings → Secrets and variables → Actions**.

| Type | Name | Value | Where to find it |
|---|---|---|---|
| Secret | `AWS_ROLE_ARN` | `arn:aws:iam::ACCOUNT_ID:role/ROLE_NAME` | IAM → Roles → your deploy role (step 3) |
| Variable | `AWS_REGION` | e.g. `ap-south-1` | The S3 bucket's region |
| Variable | `S3_BUCKET` | bucket name only (no `s3://`) | S3 console, or the distribution's *Origins* tab |
| Variable | `CLOUDFRONT_DISTRIBUTION_ID` | e.g. `E1ABCDEF123456` | CloudFront console → Distributions |

The deploy job is skipped (not failed) until `S3_BUCKET` is set.

#### 2. AWS: GitHub OIDC identity provider

IAM → **Identity providers → Add provider** (skip if one for GitHub already exists in the account):

- Provider type: **OpenID Connect**
- Provider URL: `https://token.actions.githubusercontent.com`
- Audience: `sts.amazonaws.com`

#### 3. AWS: deploy IAM role

IAM → **Roles → Create role → Web identity**, using the provider above, then set:

**Trust policy** (lets only pushes to `main` of this repository assume the role):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub": "repo:janakirampalepu/prasthana-2027-website:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

**Permissions policy** (least privilege: upload to one bucket and clear one distribution's cache):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::BUCKET_NAME"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"],
      "Resource": "arn:aws:s3:::BUCKET_NAME/*"
    },
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
    }
  ]
}
```

#### 4. CloudFront / S3 setup

- Keep the bucket **private** (Block all public access on) and let CloudFront read it through
  **Origin access control (OAC)**.
- Default root object: `index.html`.
- Error pages: `403` and `404` → `/404.html`, response code `404`.
- Add this **CloudFront Function** (viewer request) so folder addresses such as `/services/web/` work:

```js
function handler(event) {
  var r = event.request;
  if (r.uri.endsWith('/')) r.uri += 'index.html';
  else if (!r.uri.includes('.')) r.uri += '/index.html';
  return r;
}
```

#### 5. Before the first deploy

- **Back up the bucket** (enable Versioning or copy the files). The deploy uses `--delete`, so any file not in the new build is removed.
- Run the workflow manually first: **Actions → Deploy to AWS → Run workflow → tick "Dry run"**. It lists what would be uploaded or deleted and changes nothing.

### Troubleshooting

| Error in the workflow log | Likely cause |
|---|---|
| `Not authorized to perform sts:AssumeRoleWithWebIdentity` | Trust policy `sub` doesn't match `repo:OWNER/REPO:ref:refs/heads/main`, wrong audience, or the OIDC provider is missing |
| `Credentials could not be loaded` / role not found | `AWS_ROLE_ARN` secret missing or mistyped |
| `AccessDenied` on `s3:PutObject` / `ListBucket` | Permissions policy bucket name wrong, or both bucket-level and `/*` resources not included |
| `AccessDenied` on `cloudfront:CreateInvalidation` | Distribution ARN wrong in the policy, or the wrong `CLOUDFRONT_DISTRIBUTION_ID` |
| Deploy job shows as skipped | `S3_BUCKET` variable is not set (set it under *Variables*, not *Secrets*) |
| Site shows old content | Invalidation still in progress; check CloudFront → Invalidations |
| `/services/web/` returns an error | The CloudFront Function above is missing |

### Rolling back

Re-run the workflow on an earlier commit (Actions → older run → *Re-run all jobs*), or restore previous
file versions from S3 and invalidate `/*`.

More detail: [`docs/DEPLOY-AWS.md`](docs/DEPLOY-AWS.md).

## Other hosting

`npm run build` followed by `npm start` runs the site on any Node host (port 3000), and it also deploys
as-is on Vercel. The site address used for canonical links and the sitemap is set in `lib/seo.ts`.
