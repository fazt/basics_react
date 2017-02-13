const path = require('path');

let context = path.join(__dirname, 'app');
let output = path.join(__dirname, 'dist');

module.exports = {
  context: context,

  entry: './js/app.js',

  output: {
    filename: 'bundle.js',
    path: output
  },

  resolve: {
    extensions: ['','.js','.jsx','.json']
  },

  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude:/node_modules/,
        loaders: ['babel-loader'],
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
