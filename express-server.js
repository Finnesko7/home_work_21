const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const favorites = [];

app.get('/',  (req, res) => {
    res.send('App works!');
});

app.get('/favorites', (req, res) => {
    res.json(favorites);
});

app.post('/favorites', (req, res) => {
    favorites.push(req.body);
    res.send({
        success: true
    });
});

app.delete('/favorites/:id', (req, res) => {
    let id = req.params.id;

    if (favorites.length > 0) {
        var index = favorites.findIndex(item => item.id == id);
        index > -1 ? favorites.splice(index, 1) : null;
    }

    res.json({
        'success': index > -1
    });
});

app.listen(3000,  () => console.log('App is on listening port 3000'));
