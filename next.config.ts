import type { NextConfig } from "next";

// GitHub Pages 정적 export 빌드는 GH_PAGES=true 환경변수로 트리거.
const isPages = process.env.GH_PAGES === "true";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath: "/Parameta-homepage",
      assetPrefix: "/Parameta-homepage/",
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {
      images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io",
          },
        ],
      },
    };

export default nextConfig;
