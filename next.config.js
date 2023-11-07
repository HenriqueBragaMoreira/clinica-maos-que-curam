/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  }
}

module.exports = nextConfig
