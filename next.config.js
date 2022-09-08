const path = require('path');
const dotenv = require('dotenv');

//dotenv.config({ path: path.join(__dirname, `envs/.env.${process.env.TARGET_ENV}`), silent: true });

module.exports = {
  //basePath: '/kr/ko',
  // https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
  publicRuntimeConfig: {},
  serverRuntimeConfig: {},
  // 웹팩설정
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            exclude: /node_modules/,
            outputPath: 'static/images/',
            name: '[name].[ext]?ver=[hash]',
            // name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(svg)$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
        // 'url-loader',
      ],
    });
    return config;
  },
  // 리다이렉트
  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  // async redirects() {
  //   return [
  //     {
  //       source: '/main',
  //       destination: '/display/main',
  //       permanent: true,
  //     },
  //   ];
  // },
};
