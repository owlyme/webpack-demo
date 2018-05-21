const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // mode: "production",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output PushManager",
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(["dist"])
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  }
}; 