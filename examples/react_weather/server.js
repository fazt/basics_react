const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto']==='https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})

app.listen(PORT, function() {
  console.log('server on port',PORT);
});
