const fs = require('fs')
// Statistics include file size, inode, uid, gid, timestamps
fs.stat('Archivos/Something Abou Us.txt', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });