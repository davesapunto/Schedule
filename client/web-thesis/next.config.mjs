/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    trailingSlash: true,
    // Add this if you have dynamic routes or external data fetching
    skipTrailingSlashRedirect: true
  }
  
  export default nextConfig