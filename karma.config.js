var webpackConfig = require('./gulp/webapack.config.test.js');
const path = require('path');

console.log(path.resolve(__dirname, ''))

module.exports = function(config) {
  config.set({
    files: [
      // all files ending in "test"
      './test/app.test.js'
      // each file acts as entry point for the webpack configuration
    ],

    // frameworks to use
    frameworks: ['mocha'],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      './test/app.test.js': ['webpack', 'sourcemap']
    },

    reporters: ['spec'],

    coverageReporter: {

      dir: './coverage/',
      reporters: [
          { type: 'html' },
          { type: 'text' },
          { type: 'text-summary' }
      ]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    browsers: ['Chrome']
  });
};