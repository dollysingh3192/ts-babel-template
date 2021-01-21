const path = require('path');
const merge = require('webpack-merge');
const rootpath = path.resolve(__dirname, '..');
const PACKAGE = require('../package.json');
const appName = PACKAGE.name;

const commonConfig = merge([
  {
    entry: {
      [appName]: [
        path.join(rootpath, '', 'src/index.ts')
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    }
  }
]);

module.exports = commonConfig;
