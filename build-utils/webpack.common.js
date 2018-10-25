const webpack = require('webpack')
const commonPaths = require('./common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const jsLoaderRule = {
  test: /.js$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
}

const fontsLoaderRule = {
  test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  loader: 'url-loader?limit=100000',
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  module: {
    rules: [jsLoaderRule, fontsLoaderRule],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
}
