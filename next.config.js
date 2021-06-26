const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, `envs/.env.${process.env.TARGET_ENV}`), silent: true });

module.exports = {
  basePath: '/kr/ko',
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    X_API_KEY: process.env.X_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
    TARGET_ENV: process.env.TARGET_ENV,
    NEXT_PUBLIC_S3_URL: process.env.NEXT_PUBLIC_S3_URL,
    NEXT_PUBLIC_MALL_ID: process.env.NEXT_PUBLIC_MALL_ID,
    NEXT_PUBLIC_SKINFINDER_IFRAME_URL: process.env.NEXT_PUBLIC_SKINFINDER_IFRAME_URL,
    NEXT_PUBLIC_SKINFINDER_AESKEY: process.env.NEXT_PUBLIC_SKINFINDER_AESKEY,
    NEXT_PUBLIC_BPM_API_URL: process.env.NEXT_PUBLIC_BPM_API_URL,
    NEXT_PUBLIC_BPM_API_KEY: process.env.NEXT_PUBLIC_BPM_API_KEY,
    SESSION_URL: process.env.SESSION_URL,
    PRODUCT_NPAY_BUTTON_KEY: process.env.PRODUCT_NPAY_BUTTON_KEY,
    PRODUCT_NPAY_MERCHANT_ID: process.env.PRODUCT_NPAY_MERCHANT_ID,
    PRODUCT_NPAY_ORD_SHEET_URL_PC: process.env.PRODUCT_NPAY_ORD_SHEET_URL_PC,
    PRODUCT_NPAY_WISHLIST_URL_PC: process.env.PRODUCT_NPAY_WISHLIST_URL_PC,
    PRODUCT_NPAY_ORD_SHEET_URL_MO: process.env.PRODUCT_NPAY_ORD_SHEET_URL_MO,
    PRODUCT_NPAY_WISHLIST_URL_MO: process.env.PRODUCT_NPAY_WISHLIST_URL_MO,
    KAKAO_KEY: process.env.KAKAO_KEY,
    BASE_URL_MO: process.env.BASE_URL_MO,
    SUBSCRIPTION_INICIS_URL: process.env.SUBSCRIPTION_INICIS_URL,
    SUBSCRIPTION_INICIS_MALLID: process.env.SUBSCRIPTION_INICIS_MALLID,
    SUBSCRIPTION_INICIS_ORDERID: process.env.SUBSCRIPTION_INICIS_ORDERID,
    SUBSCRIPTION_INICIS_INILITEKEY: process.env.SUBSCRIPTION_INICIS_INILITEKEY,
    PSHOP_API_URL: process.env.PSHOP_API_URL,
    AMORE_API_URL: process.env.AMORE_API_URL,
  },
  serverRuntimeConfig: {
    PRODUCT_NPAY_ORD_REG_URL: process.env.PRODUCT_NPAY_ORD_REG_URL,
    PRODUCT_NPAY_WISH_REG_URL: process.env.PRODUCT_NPAY_WISH_REG_URL,
    PRODUCT_NPAY_CERTI_KEY: process.env.PRODUCT_NPAY_CERTI_KEY,
    PRODUCT_NPAY_COMMON_CERTI_KEY: process.env.PRODUCT_NPAY_COMMON_CERTI_KEY,
  },
  // 웹팩설정
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            exclude: /node_modules/,
            publicPath: process.env.NEXT_PUBLIC_S3_URL
              ? process.env.NEXT_PUBLIC_S3_URL + '/public/static/images/'
              : '/kr/ko/_next/static/images/',
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
    if (!isServer) {
      config.node = {
        fs: 'empty',
        'fs-extra': 'empty',
      };
    }
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
