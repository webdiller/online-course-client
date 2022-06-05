const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  images: {
    domains: ['loremflickr.com', 'ibb.co']
  },
  env: {
    // FIXME: Расскоментировать при проде
    // HOST: process.env.NODE_ENV === 'production' ? 'http://localhost:3001' : 'http://localhost:3001',
    // API: process.env.NODE_ENV === 'production' ? 'http://localhost:3001/api/v1' : 'http://localhost:3001/api/v1',

    // FIXME: Удалить при проде
    HOST: process.env.NODE_ENV === 'production' ? 'http://localhost:3001' : 'http://localhost:3001',
    API: process.env.NODE_ENV === 'production' ? 'http://localhost:3001/api/v1' : 'http://localhost:3001/api/v1',
  },
  reactStrictMode: false,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  compiler: {
    removeConsole: false,
  },
})

module.exports = nextConfig
