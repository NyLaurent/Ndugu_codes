import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['react-leaflet', 'react-loader-spinner'],
  experimental: {
    esmExternals: 'loose'
  }
};

export default nextConfig;
