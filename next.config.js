/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    reactStrictMode: true,
    env: {
        PUBLIC_NEXT_MAIL,
        PUBLIC_NEXT_PASS,
        PUBLIC_NEXT_MAILTO
    }
};

module.exports = nextConfig;
