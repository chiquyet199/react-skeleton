const webpack = require('webpack')
const commonPaths = require('./common-paths')
const port = process.env.PORT || 1992
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
  entry: {
    app: `${commonPaths.appEntry}/index.js`,
  },
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [cssLoaderRule],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port: port,
    contentBase: './public',
    hot: true,
    open: true,
  },
}
