var express = require('express');
var app = express();

var favorites = [];

app.use(express.json());

app.get('/', function (req, res) {
  res.send('App works!');
});

app.get('/favorites', function (req, res) {
  res.json(favorites);
});

app.post('/favorites', function (req, res) {
  favorites.push(req.body);
  res.json(req.body);
});

app.listen(3000, function () {
  console.log('App is on listening port 3000');
});
