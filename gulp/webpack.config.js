const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src/js/app.js');
const BUILD_DIR = path.resolve(__dirname, '../build');

console.log(APP_DIR);

const config = (env) => {

  return {
    entry: APP_DIR,
    output: {
      path: BUILD_DIR,
      filename: 'app.min.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    },
    plugins: [
      new UglifyJSPlugin()
    ]
  };  
}

module.exports = config();