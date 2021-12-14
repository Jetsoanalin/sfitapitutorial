var fs  = require('fs')
var data = 'SFIT'

// create a writeable stream
var writeStream = fs.createWriteStream('explain.txt');

// write the data to stream with encoding
writeStream.write(data,'utf-8')

writeStream.end()


writeStream.on('finish', function(){
    console.log("Write Completed");
})

writeStream.on('error', function(err){
    console.log(err.stack);
})

console.log('End')