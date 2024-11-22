/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    trailingSlash: true,
    // Add this if you have dynamic routes or external data fetching
    skipTrailingSlashRedirect: true,
    rewrites: async () => {
      return [
        {
          source: '/api/:path*',
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://127.0.0.1:5000/api/user'
              : '/api/',
        },
      ]
    },
  }
  
  export default nextConfig