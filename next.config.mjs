/** @type {import('next').NextConfig} */
const nextConfig = {
    // disable esline
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: "standalone",
};

export default nextConfig;
