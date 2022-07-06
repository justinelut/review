require('dotenv').config();
const { sizes } = require('./blocks/Image/sizes');
const withPWA = require("next-pwa");

module.exports = withPWA({
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'theverge.co.ke',
      "robohash.org", 
      "res.cloudinary.com"
      // Your domain(s) here
    ],
    deviceSizes: sizes,
  },
  // module.exports = {
  i18n: {
    locales: ["en", "my"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  pwa: {
    dest: "public",
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  // };
});
