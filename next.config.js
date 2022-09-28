/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
  },
  httpAgentOptions: {
    keepAlive: false,
  },
}

module.exports = nextConfig
