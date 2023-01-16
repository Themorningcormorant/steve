// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
// const withImages = require("next-images");

// module.exports = nextConfig / withImages();

const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withCSS(
  withImages({
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      });
      return config;
    },
  })
);
