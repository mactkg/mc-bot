/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
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
