/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: '/mc-bot',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin', // Matched parameters can be used in the key
            value: '*',
          }
        ],
      },
    ]
  },
}
