const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/src/client/public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'client', 'public','index.html'));
});

app.listen(3000);
console.log('server on port', port);
