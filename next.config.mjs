/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img.clerk.com" },
      { hostname: "cdn.sanity.io" },
      { hostname: "i.scdn.co" },
      { hostname: "localhost" },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx"],
};

export default nextConfig;
