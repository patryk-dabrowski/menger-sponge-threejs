const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: `./src/index.js`,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: ".",
    publicPath: "/dist",
  },
};