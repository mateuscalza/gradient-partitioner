const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve('./src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve('./dist'),
    library: 'gradient-partitioner',
    libraryTarget: 'umd',
    filename: 'index.js',
    umdNamedDefine: true,
  },
  resolve: {
    root: path.resolve('./src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.html$/,
        loader: 'raw',
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
}
