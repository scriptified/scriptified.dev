/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires

const nextConfig = {
  swcMinify: true, // opt-in to use the Next.js compiler for minification
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

    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    domains: ['github.com', 'seeklogo.com', 'media.giphy.com', 'images.scriptified.dev', 'api.lorem.space'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
