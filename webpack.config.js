const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.join(__dirname , '/index.jsx');

var config = {
  entry: APP_DIR,
  output:{
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }
}


module.exports = config;
