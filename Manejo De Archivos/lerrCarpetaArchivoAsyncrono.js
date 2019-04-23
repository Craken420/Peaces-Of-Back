const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

async function read (file) {
  return new Promise(resolve => {
    let header = '';
    const label = `read-${file}`;
    console.time(label);
    const stream = fs.createReadStream('Archivos/' + file, {encoding: 'utf8'});
    stream.on('data', data => {
      header += data;
      stream.destroy();
    });
    stream.on('close', () => {
      remplazar(header, file)
      console.timeEnd(label); 
      resolve();
    });
   
  });
}

function remplazar (header, file) {
    fs.writeFile('Archivos/'+file, header, function (err) { 
      if (err) return console.log(err); 
      console.log('Appended!'); 
    }); 
}


async function startTests(files) {
  for (let file of files) {
    console.log(file);
    await read(file);
  }
}

readdir('Archivos').then(files => {
  startTests(files);
});