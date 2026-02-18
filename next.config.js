/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment to username.github.io/repo-name
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
}

module.exports = nextConfig
