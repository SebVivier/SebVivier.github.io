/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
  // For user site (SebVivier.github.io) there is NO basePath.
};
module.exports = nextConfig;
