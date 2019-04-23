// Statistics include file size, inode, uid, gid, timestamps
fs.stat('test.txt', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });