const path = require("path");

module.exports = {
  // entry file
  entry: "./src/js/main.js",
  output: {
    // 번들링된 js파일 이름과 저장 경로
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/js")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                { corejs: 3, proposals: true },
              ],
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
};
