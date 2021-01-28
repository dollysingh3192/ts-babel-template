const webpackConfig = require('./webpack/test');
const testPattern = 'src/*.spec.ts';

module.exports = function (config) {
  config.set({
    basePath: '',
    // frameworks to use
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      { pattern: testPattern, watched: false }
    ],
    // list of files / patterns to exclude
    exclude: [
      'src/**/*.d.ts',
      'src/**/*.scss'
    ],
    // preprocess matching files before serving them to the browser
    // Source maps can be found on clicking DEBUG btn
    // Preprocessor will convert Typescript to Javascript
    preprocessors: {
      [testPattern]: ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    // webpackMiddleware: {
    //   stats: 'errors-only'
    // },
    // webpackServer: {
    //   noInfo: true
    // },
    // Enable or disable failure on running empty test-suites. If disabled the program will return exit-code 0 and display a warning.
    failOnEmptyTestSuite: false,
    // test results reporter to use
    reporters: ['spec'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // start these browsers
    browsers: ['ChromeHeadless'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
