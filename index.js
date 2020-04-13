var fs = require('fs');

// var value = fs.readFileSync('message.txt', { encoding: 'utf8' });
// var res = fs.writeFileSync('message.txt', Number(value) + 1);
// console.log(res);

// fs.readFile('message.txt', function (err, data) {
//   fs.writeFile('message.txt', Number(data.toString('utf8')) + 1, function (
//     err
//   ) {
//     if (err) console.log('Error', err);
//     console.log('File has been saved');
//   });
// });

/**
 * Promises
 */
// fs.promises
//   .readFile('message.txt', { encoding: 'utf8' })
//   .then(function (string) {
//     return fs.promises.writeFile('message.txt', Number(string) + 1);
//   })
//   .then(function () {
//     console.log('File is ready!');
//   });

// fs.promises
//   .readFile('message.txt')
//   .then((data) => data.toString())
//   .then((string) => fs.promises.writeFile('message.txt', Number(string) + 1))
//   .then(() => console.log('File is ready!'));

console.log('Continue...');

console.log(args);
