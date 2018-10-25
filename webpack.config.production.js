const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const jsLoaderRule = {
  test: /.js$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
}

const cssLoaderRule = {
  test: /\.s?css$/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    {
      loader: 'css-loader',
    },
    { loader: 'sass-loader' },
  ],
}

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'static/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [jsLoaderRule, cssLoaderRule],
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
  ],
}
