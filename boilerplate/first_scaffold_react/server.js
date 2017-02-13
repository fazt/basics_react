const express     = require('express');
const browserify  = require('browserify-middleware');
const babelify    = require('babelify');
const browserSync = require('browser-sync');

const app   = express();
const port  = process.env.PORT || 3000;

browserify.settings({
  transform: [babelify.configure({

  })],
  presets: ["es2015", "react"],
  extensions: [".js",".jsx"],
  grep: /\.jsx?$/
});

app.get('/bundle.js',browserify(__dirname +'/source/app.jsx' ));

app.get(['*.png', '*.jpg', '*.css', '*.map'], (req, res) => {
  res.sendFile(__dirname + '/public' + req.path);
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
  browserSync({
    proxy: 'localhost' + port,
    files: ['source/**/*.{jsx}', 'public/**/*.{css}' ],
    options: {
      ignored: 'node_modules'
    }
  });
})
