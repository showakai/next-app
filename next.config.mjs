/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "books.google.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
