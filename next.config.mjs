/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.formula1.com",
      },
      {
        protocol: "https",
        hostname: "https://flagicons.lipis.dev",
      },
    ],
  },
};

export default nextConfig;
