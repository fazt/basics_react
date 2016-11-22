'use strict';

const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.jsx'
  },
  output:{
    path: __dirname + '/public',
    filename: "[name].bundle.js"
  },
  module:{
    loaders: [
      {
        test:/\.jsx$/,
        loader:'babel'
      }
    ]
  }
}
