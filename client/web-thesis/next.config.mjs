/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    eslint: {
      ignoreDuringBuilds: true, // To suppress ESLint warnings during build
    }
  }
  
  export default nextConfig