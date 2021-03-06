const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: [
        "./src/index.tsx"
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "[hash].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                IS_IN_WEBPACK: true,
                NODE_ENV: '"production"'
            }
        })
    ],
    optimization: {
        minimize: true
    },
  module: {
    rules: [
        { test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [{loader: "ts-loader"}]
        },
    ]
  }
};
