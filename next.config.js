
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Optimize webpack for Buffer usage and reduce serialization warnings
    config.cache = {
      ...config.cache,
      buildDependencies: {
        config: [__filename],
      },
      cacheDirectory: '.next/cache/webpack',
      type: 'filesystem',
      compression: 'gzip',
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    }
    
    // Handle Buffer in client-side code
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        buffer: require.resolve('buffer'),
      }
    }
    
    return config
  },
  experimental: {
    // Enable efficient caching
    webpackBuildWorker: true,
  }
}

module.exports = nextConfig
