import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PATHNAME: process.env.PATHNAME,
    TOKEN: process.env.TOKEN,
    DBURL: process.env.DBURL
  }
};

export default nextConfig;
