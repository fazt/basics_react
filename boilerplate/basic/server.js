const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server on port', app.get('port'));
});
