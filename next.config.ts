import type { NextConfig } from "next";

// `npm run build:static` (STATIC_EXPORT=1) writes a plain HTML/CSS/JS site to ./out,
// which is what the AWS (S3 + CloudFront) deploy workflow uploads.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport && {
    output: "export",
    trailingSlash: true, // /services/web/ -> out/services/web/index.html
    images: { unoptimized: true }, // no image server on a static host
  }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
