var express = require('express');
var app = express();

const path = require('path');

app.use(express.static(__dirname + '/exemplos'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000, () => console.log('App listening on port 3000!'));
