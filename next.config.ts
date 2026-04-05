import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://notehub-public.goit.study/api/:path*",
      },
    ];
  },
};

export default nextConfig;