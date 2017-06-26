var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var config = (env) => {
  console.log("Running on enviroment:", env.development ? " DEV" : " PROD"  );

  if(env.development){
    var BUILD_DIR = path.resolve(__dirname, 'public/js');

    return {
      entry: APP_DIR + '/app.js',
      output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
      }
    };  
  } else if (env.production){
    var BUILD_DIR = path.resolve(__dirname, 'dist/js');

    return {
      entry: APP_DIR + '/app.js',
      output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
      }
    };  
  }

  
}



module.exports = config;