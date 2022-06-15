const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  images: {
    domains: ['loremflickr.com', 'ibb.co', 'ucarecdn.com', 'storage.yandexcloud.net']
  },
  env: {
    HOST: process.env.NODE_ENV === 'production' ? 'http://online-courses-dev.ru' : 'http://localhost:3000', // WEBSITE
    API: process.env.NODE_ENV === 'production' ? '/server/v1' : 'http://localhost:3001/server/v1', // SERVER
  },
  reactStrictMode: false,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: false,
  },
})

module.exports = nextConfig
