
const fs = require('fs')

const archivo =  'Archivos\\Something Abou Us.txt'

function readDemo1(file1) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file1, 'utf8', function (err, dataDemo1) {
            if (err)
                reject(err);
            else
                resolve(dataDemo1);
        });
    });
}
async function copyFile() {

    try {
        let dataDemo1 = await readDemo1(archivo)
        dataDemo1 += '\n' +  await readDemo1(archivo)

        await writeDemo2(archivo, dataDemo1)
        console.log(dataDemo1)
    } catch (error) {
        console.error(error);
    }
}
copyFile();

function writeDemo2(archivo, dataDemo1) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(archivo.replace(/.*\\/g, ''), dataDemo1, 'utf8', function(err) {
        if (err)
          reject(err);
        else
          resolve("Promise Success!");
      });
    });
  }