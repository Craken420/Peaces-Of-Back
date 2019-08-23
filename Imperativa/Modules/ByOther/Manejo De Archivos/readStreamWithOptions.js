const fs = require('fs')

var readOptions = { 
  'flags': 'r', 
  'encoding': 'utf-8', 
  'mode': 0666, 
  'bufferSize': 4 * 1024
};

var dataListener = function (data) {
    console.log(typeof data);
    console.log(data.toString('utf-8'))
}

var exampleStream = fs.createReadStream(
  'Archivos/Something Abou Us.txt', readOptions
)

exampleStream.addListener('data', dataListener)