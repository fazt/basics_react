module.exports = {
  // entry file
  entry: './public/app.jsx',
  // output file
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // to load components without relatives paths
    root: __dirname,
    alias: {
      Greeter: 'public/components/Greeter.jsx',
      GreeterMessage: 'public/components/GreeterMessage.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx',
    },
    // to read extensions .jsx, .js, etc
    extensions: ['','.js','.jsx'],

  },
  module: {
    loaders: [
      {
        // the loader name
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        // test this files
        test: /\.jsx?$/,
        // ignore this files
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
