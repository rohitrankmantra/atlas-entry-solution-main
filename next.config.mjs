/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,     // ⭐ IMPORTANT
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
