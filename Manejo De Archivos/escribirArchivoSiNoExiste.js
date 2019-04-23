const fs = require('fs');

const writeToFile = (fileName, callback) => {
  fs.open(fileName, 'wx', (error, fileDescriptor) => {
    if (!error && fileDescriptor) {
      // Do something with the file here ...
      fs.writeFile(fileDescriptor, newData, (error) => {
        if (!error) {
          fs.close(fileDescriptor, (error) => {
            if (!error) {
              callback(false);
            } else {
              callback('Error closing the file');
            }
          });
        } else {
          callback('Error writing to new file');
        }
      });
    } else {
      callback('Could not create new file, it may already exists');
    }
  });
};