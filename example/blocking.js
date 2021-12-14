var fs = require('fs')
var data = fs.readFileSync('explain.txt');

console.log(data.toString())
console.log('End')