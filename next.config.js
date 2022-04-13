/** @type {import('next').NextConfig} */


//const isProd = process.env.NODE_ENV === 'production'
//  assetPrefix: isProd ? './' : '',
module.exports = {
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}
