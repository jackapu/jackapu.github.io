/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment to username.github.io/repo-name
  basePath: '/jackapu.github.io',
  assetPrefix: '/jackapu.github.io',
}

module.exports = nextConfig
