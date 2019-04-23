const util = require('util');
const fs = require('fs');

// Promisify "error-back" functions.
const fsOpen = util.promisify(fs.open);
const fsWrite = util.promisify(fs.writeFile);
const fsClose = util.promisify(fs.close);

// Now we may create 'async' function with 'await's.
async function doSomethingWithFile(fileName) {
  const fileDescriptor = await fsOpen(fileName, 'wx');
  
  // Do something with the file here...
  
  await fsWrite(fileDescriptor, newData);
  await fsClose(fileDescriptor);
}