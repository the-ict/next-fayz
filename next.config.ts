import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.cache = false; // Webpack cache'ni o‘chiradi
    return config;
  },
};

export default nextConfig;
