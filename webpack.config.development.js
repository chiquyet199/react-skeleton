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
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [jsLoaderRule, cssLoaderRule],
  },
  devServer: {
    contentBase: './public',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
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
