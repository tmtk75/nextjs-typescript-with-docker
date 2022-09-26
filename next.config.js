/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // https://github.com/vercel/next.js/blob/canary/examples/with-docker/next.config.js
}

module.exports = nextConfig
