const fs = require('fs')

var readOptions = { 
  'flags': 'r', 
  'encoding': 'utf-8', 
  'mode': 0666, 
  'bufferSize': 4 * 1024
};

var exampleStream = fs.createReadStream(
    './Archivos/dbo.SpCREDIObtenerAgrupaciones.StoredProcedure.sql', readOptions
)

var dataListener = function (data) {
    sys.puts(typeof data);
    console.log(data.toString('utf-8'))
}

exampleStream.addListener('data', dataListener)