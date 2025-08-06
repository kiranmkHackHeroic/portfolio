import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com', 'github.com', 'uploadthing.com'],
  },
  typescript: {
    // Temporarily ignore build errors during development
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
