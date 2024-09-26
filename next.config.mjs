/** @type {import('next').NextConfig} */
const nextConfig = {
    // disable esline
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: "standalone",
    images: {
        domains: ["source.unsplash.com"],
    },
};

export default nextConfig;
