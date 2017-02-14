var webpack = require('webpack');

module.exports = {
  // entry file
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  // output file
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // to load components without relatives paths
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss'
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
  },
  devtool: 'inline-source-map'//eval-source-map"
};
