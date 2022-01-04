/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  assetPrefix: prod ? '/mc-bot' : '',
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
