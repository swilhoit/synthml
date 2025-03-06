import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  // Add an empty basePath to ensure proper path handling in production
  basePath: '',
};

export default nextConfig;
