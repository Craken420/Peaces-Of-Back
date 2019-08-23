const fs = require('fs')

function existDirOFile (pathDir) {
    fs.stat(pathDir, function(err, fileStat) {
        if (err) {
            if (err.code == 'ENOENT') {
                console.log('Does not exist.')
            }
        } else {
            if (fileStat.isFile()) {
                console.log('File found.')
            } else if (fileStat.isDirectory()) {
                console.log('Directory found.')
            }
        }
    })
}

module.exports.existDirOFile = existDirOFile