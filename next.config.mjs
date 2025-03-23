/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img.clerk.com" },
      { hostname: "cdn.sanity.io" },
      { hostname: "i.scdn.co" },
      { hostname: "localhost" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx"],
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
