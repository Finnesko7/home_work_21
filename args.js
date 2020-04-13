var args = require('process').argv;

var password = args[2].split('=')[1];
var login = args[3].split('=')[1];

console.log(password, login);

console.log(leadingZero(50));
