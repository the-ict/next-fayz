import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.cache = false;
    }

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "export"
};

export default nextConfig;
