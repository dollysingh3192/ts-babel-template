const path = require('path');
const commonConfig = require('./base.js');
const merge = require('webpack-merge');

const rootpath = path.resolve(__dirname, '..');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', //eval-cheap-source-map
  output: {
    library: "Renderer",
    libraryTarget: 'umd',
    libraryExport: "default",
    umdNamedDefine: true,
    path: path.resolve(rootpath, 'dist'),
    // publicPath: '/',
    filename: '[name].js',
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      // {
      //   // Include ts, tsx, js, and jsx files.
      //   test: /\.(ts|js)x?$/,
      //   exclude: /node_modules/,
      //   loader: require.resolve('babel-loader'),
      //   query: { compact: false }
      // }
    ]
  },
  plugins: [],
  optimization: {
  },
  devServer: {
    port: 3001,
    open: true,
    inline: true,
    stats: 'errors-only',
    disableHostCheck: true
  }
});
