var http = require('http');

var inc = 0;

var list = [];

class Hero {
  constructor(hp, mp) {
    this.hp = hp;
    this.mp = mp;
  }
}

var server = http.createServer(function (req, res) {
  list.push(new Hero((Math.random() * 100) >> 0, (Math.random() * 200) >> 0));
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);
  res.end(JSON.stringify(list));
});

server.listen('8080');
