import type { NextConfig } from "next";


const staticExport = false

const nextConfig: NextConfig = {
  ...staticExport && {
    output: "export",
  },
  images: {
    unoptimized: staticExport, // Needed if using Next.js Image component 
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    //  serverActions: true
  }
};

export default nextConfig