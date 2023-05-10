/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/lib/supabase/imageLoader.ts'
  }
}

module.exports = nextConfig
