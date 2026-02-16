import type { NextConfig } from "next";


const staticExport = false
const isStrict = false;

const nextConfig: NextConfig = {
  ...staticExport ? { output: "export", } : {},
  images: {
    unoptimized: staticExport, // Needed if using Next.js Image component 
  },
  eslint: {
    ignoreDuringBuilds: !isStrict
  },
  typescript: {
    ignoreBuildErrors: !isStrict,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, must-revalidate', // will cache but must check if there is changes from server
          },
        ],
      },
    ]
  },
};
export default nextConfig