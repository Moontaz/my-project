/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my-project",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

module.exports = nextConfig;

export default nextConfig;
