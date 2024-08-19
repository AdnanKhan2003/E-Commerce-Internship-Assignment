/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  swcMinify: true,
  optimizeFonts: true,
  paths: {
    "@/*": ["./*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
    minimumCacheTTL: 15000000,
  },
};

export default nextConfig;
