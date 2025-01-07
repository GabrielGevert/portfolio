import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
