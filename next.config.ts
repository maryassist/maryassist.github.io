import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages serves directory-style URLs; emit `/route/index.html`.
  trailingSlash: true,
  // The static export has no image optimization server, so serve images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
