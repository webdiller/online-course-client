const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  images: {
    domains: ['loremflickr.com', 'ibb.co']
  },
  env: {
    HOST: process.env.NODE_ENV === 'production' ? '194.58.111.59' : 'http://localhost:3001',
    API: process.env.NODE_ENV === 'production' ? '194.58.111.59/api/v1' : 'http://localhost:3001/api/v1',
  },
  reactStrictMode: false,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: false,
  },
})

module.exports = nextConfig
