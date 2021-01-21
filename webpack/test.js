const commonConfig = require('./base.js');
const devConfig = require('./dev.js');
const rules = devConfig.module.rules;

module.exports = {
  mode: 'development',
  resolve: commonConfig.resolve,
  devtool: 'inline-source-map',
  module: {
    rules: rules
  },
  plugins: []
};
