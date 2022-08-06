/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = withPWA({
  swcMinify: true, // opt-in to use the Next.js compiler for minification
  pwa: {
    dest: 'public',
    register: true, // let this plugin register service worker for you
    sw: 'service-worker.js', // service worker script file name
    disable: process.env.NODE_ENV === 'development', // disable pwa feature in development
    runtimeCaching, // caching strategies
    // publicExcludes: ['images'], // an array of glob pattern strings to exclude files in the public folder from being precached
    // scope: '/', // url scope for pwa
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg?$/,
      oneOf: [
        {
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
              },
            },
          ],
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ['github.com', 'seeklogo.com', 'media.giphy.com', 'images.scriptified.dev', 'www.placecage.com'],
    formats: ['image/avif', 'image/webp'],
  },
});

module.exports = nextConfig;
