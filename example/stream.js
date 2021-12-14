var fs  = require('fs')
var data = ''
// readable stream
var readStream = fs.createReadStream('explain.txt');

// set encoding to utf8
readStream.setEncoding('utf-8')

// handle sream events -> data, end and error 

readStream.on('data', function(chunk){
    data += chunk;
})

readStream.on('end', function(){
    console.log(data);
})

readStream.on('error', function(err){
    console.log(err.stack);
})

console.log('End')