const path = require("path"),
  BrowserSyncPlugin = require("browser-sync-webpack-plugin");
module.exports = {
  entry: {
    app: "./js/script.js",
  },

  output: {
    path: path.resolve("js"),
    filename: "out.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env"],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      files: ["./css/style.css", "./*.html"],
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: "localhost",
      port: 3003,
      server: {
        baseDir: [""],
      },
    }),
  ],
  devtool: "source-map",
};
