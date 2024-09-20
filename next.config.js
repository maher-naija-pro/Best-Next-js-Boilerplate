const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false
})
const withMDX = require("@next/mdx")()
const createNextIntlPlugin = require("next-intl/plugin")

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  experimental: {
    optimizePackageImports: ["react"],

    nextScriptWorkers: false,
    mdxRs: true
  },
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value"
          }
        ]
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  env: {
    customKey: "my-value"
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  images: {
    // cache optimized images for 60 seconds
    minimumCacheTTL: 60
  } // Your existing Next.js configuration
}

module.exports = () => {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH
  }
  const plugins = [withBundleAnalyzer, withMDX, withNextIntl]
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  })
  return config
}
