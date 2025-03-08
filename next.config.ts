import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Serverda ishlashda cache'ni o'chirib qo'yish
    if (!isServer) {
      config.cache = false;
    }

    // Qo'shimcha webpack konfiguratsiyalari kerak bo'lsa, bu yerga qo'shishingiz mumkin
    return config;
  },
  reactStrictMode: true,
  swcMinify: true
  // Qo'shimcha Next.js konfiguratsiyalari bu yerda bo'lishi mumkin
};

export default nextConfig;
