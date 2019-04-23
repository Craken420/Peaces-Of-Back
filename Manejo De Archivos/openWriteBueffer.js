var path = 'public/uploads/file.txt',
buffer = new Buffer("some content\n");

fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }

    fs.write(fd, buffer, 0, buffer.length, null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log('file written');
        })
    });
});
//------------------------------------------------
fs.open(path, 'w+', function(err, data) {
    if (err) {
        console.log("ERROR !! " + err);
    } else {
        fs.write(data, 'content', 0, 'content length', null, function(err) {
            if (err)
                console.log("ERROR !! " + err);
            fs.close(data, function() {
                console.log('written success');
            })
        });
    }
});