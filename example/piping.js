var fs = require('fs')
var zlib = require('zlib')

// Compressing explain.txt
fs.createReadStream('input.txt.gz')
            .pipe(zlib.createGunzip())
            .pipe(fs.createWriteStream('input1.txt'));

console.log('File is De-Compressed')