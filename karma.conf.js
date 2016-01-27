var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'test.webpack.js'
    ],
    preprocessors: {
      'test.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter'
    ],
    webpack: {
      module: {
        loaders: [{ test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules|static/,
            query: { presets: ['es2015', 'react'] }
          }]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
