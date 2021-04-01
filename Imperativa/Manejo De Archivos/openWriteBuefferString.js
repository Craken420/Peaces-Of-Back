const fs = require('fs')
var path = 'Archivos/Something Abou Us.txt',
buffer = new Buffer("some content\nhey como estan\nheyheyhey");

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }
    console.log('fd: ',fd)
    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });
});