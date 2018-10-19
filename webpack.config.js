const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const jsLoaderRule = {
  test: /.js$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
}

const cssLoaderRule = {
  test: /\.s?css$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[local]',
        sourceMap: true,
        minimize: true,
      },
    },
    { loader: 'sass-loader' },
  ],
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [jsLoaderRule, cssLoaderRule],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html',
    }),
  ],
}
