// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true, // let this plugin register service worker for you
    sw: 'service-worker.js', // service worker script file name
    disable: process.env.NODE_ENV === 'development', // disable pwa feature in development
    // publicExcludes: ['images'], // an array of glob pattern strings to exclude files in the public folder from being precached
    // scope: '/', // url scope for pwa
    // runtimeCaching, // caching strategies
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['github.com', 'seeklogo.com', 'media.giphy.com'],
  },
});
