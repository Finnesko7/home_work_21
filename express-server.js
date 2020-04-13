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

app.delete('/favorites/:id', function (req, res) {

    let result = false;
    let id = req.params.id;

    if (favorites.length > 0) {
        let index =favorites.findIndex(function (item) {
            return item.id == id;
        });

        if (index > -1 ) {
            favorites.splice(index, 1);
            result = true;
        }
    }

    res.json({
        'success': result
    });
});

app.listen(3000, function () {
  console.log('App is on listening port 3000');
});
