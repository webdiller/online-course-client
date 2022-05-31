const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  images: {
    domains: ['loremflickr.com']
  },
  env: {
    // FIXME: Расскоментировать при проде
    // HOST: process.env.NODE_ENV === 'production' ? 'https://online-courses.vercel.app/' : 'http://localhost:3001',
    // API: process.env.NODE_ENV === 'production' ? 'https://online-courses.vercel.app/api/v1' : 'http://localhost:3001/api/v1',

    // FIXME: Удалить при проде
    HOST: process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000',
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
