import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PATHNAME: process.env.PATHNAME,
    TOKEN: process.env.TOKEN,
    DB_URL: process.env.DB_URL
  }
};

export default nextConfig;
