# Deploying to AWS (S3 + CloudFront) with GitHub Actions

Every push to `main` runs `.github/workflows/deploy-aws.yml`, which:

1. installs dependencies and lints,
2. builds the static site (`npm run build:static`, output in `./out`),
3. uploads it to your S3 bucket,
4. invalidates the CloudFront cache so the new version is live within a minute or two.

No AWS access keys are stored in GitHub. The workflow signs in with a short-lived
role through OpenID Connect (OIDC).

> This assumes the website is served by CloudFront from an **S3 bucket**. If your
> distribution uses another origin (EC2, Amplify), tell the team: the build part is the
> same but the upload step changes.

## One-time setup

### 1. Find your bucket and distribution
CloudFront console → open the distribution with `prasthana.com` under *Alternate domain
names* → note the **Distribution ID**, and the S3 bucket under the *Origins* tab.

**Back up first.** The deploy uses `--delete`, so anything in the bucket that is not part
of the new site is removed. Turn on **Versioning** in the bucket (Properties tab), or copy the
current files somewhere safe.

### 2. Folder links on CloudFront (only if not already handled)
Pages live at addresses like `/services/web/`. Add this **CloudFront Function** (viewer
request) to the distribution's default behaviour:

```js
function handler(event) {
  var r = event.request;
  if (r.uri.endsWith('/')) r.uri += 'index.html';
  else if (!r.uri.includes('.')) r.uri += '/index.html';
  return r;
}
```
Also set *Error pages*: 403 and 404 → `/404.html`, response code 404.

### 3. Let GitHub sign in to AWS (OIDC)
IAM → Identity providers → **Add provider** (skip if `token.actions.githubusercontent.com`
already exists):
- Type: OpenID Connect
- Provider URL: `https://token.actions.githubusercontent.com`
- Audience: `sts.amazonaws.com`

### 4. Create the deploy role
IAM → Roles → Create role → *Web identity* → provider above, audience `sts.amazonaws.com`.
Use this **trust policy** (replace `ACCOUNT_ID`):

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": { "Federated": "arn:aws:iam::ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com" },
    "Action": "sts:AssumeRoleWithWebIdentity",
    "Condition": {
      "StringEquals": {
        "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
        "token.actions.githubusercontent.com:sub": "repo:janakirampalepu/prasthana-2027-website:ref:refs/heads/main"
      }
    }
  }]
}
```
This allows only pushes to the `main` branch of this repository to use the role.

Attach this **permissions policy** (replace `BUCKET`, `ACCOUNT_ID`, `DISTRIBUTION_ID`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    { "Effect": "Allow", "Action": ["s3:ListBucket"], "Resource": "arn:aws:s3:::BUCKET" },
    { "Effect": "Allow", "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"], "Resource": "arn:aws:s3:::BUCKET/*" },
    { "Effect": "Allow", "Action": ["cloudfront:CreateInvalidation"], "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID" }
  ]
}
```
Copy the role's **ARN**.

### 5. Add the settings in GitHub
Repository → Settings → Secrets and variables → Actions.

| Type | Name | Value |
|---|---|---|
| Secret | `AWS_ROLE_ARN` | the role ARN from step 4 |
| Variable | `AWS_REGION` | the bucket's region, e.g. `ap-south-1` |
| Variable | `S3_BUCKET` | the bucket name (name only, no `s3://`) |
| Variable | `CLOUDFRONT_DISTRIBUTION_ID` | e.g. `E1ABCDEF123456` |

Until `S3_BUCKET` is set, the deploy job is skipped (the build still runs).

### 6. Try it safely first
Actions tab → **Deploy to AWS** → *Run workflow* → tick **Dry run**. It prints what would
be uploaded and deleted without changing anything. Check the list, then run it again
without the tick (or just push to `main`).

## Day to day
Push or merge to `main` and the site updates automatically. Watch progress in the
**Actions** tab.

## Rolling back
- Re-run the workflow on an earlier commit (Actions → pick the older run → *Re-run all jobs*), or
- restore the previous file versions from S3 (if Versioning was on), then invalidate `/*`.

## Notes
- Hashed files in `_next/static` are cached for a year; everything else always revalidates.
- DNS stays at Namecheap, and email (Google Workspace MX records) is unaffected. Do not
  change DNS for this.
- If the domain changes, update `SITE_URL` in `lib/seo.ts`.
- Build locally with `npm run build:static`, then preview with any static server on `./out`.
