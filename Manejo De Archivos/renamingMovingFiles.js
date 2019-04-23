fs.rename('test.txt', 'test.txt.bak', function (err) {
    if (err) throw err;
    console.log('Rename complete.');
  });
  
  fs.rename('/tmp/test.txt', '/home/dtron/testCopy.txt', function (err) {
    if (err) throw err;
    console.log('Move complete.');
  });