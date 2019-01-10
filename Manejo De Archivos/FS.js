/*** 
Sistema de archivos:
1. fs.Dirent
2. fs.watch
3. fs.accessSync
4. Open
5. Apend
6. fs.openSync
7. fs.copyFile
8. Stream
9. fs.exists
10. Mkdir
11. Directorio
12. Rename
13. Eliminar
14. WatchFile
15. fs.writeFile
16. filehandle.close
17. filehandle.truncate
18. fs.rename
1. fs.Dirent
2. fs.watch
3. fs.accessSync
4. Open
5. Apend
6. fs.openSync
7. fs.copyFile
8. Stream
9. fs.exists
10. Mkdir
11. Directorio
12. Renme
13. Eliminar
14. WatchFile
15. fs.writeFile
16. filehandle.close
17. filehandle.truncate
18. fs.rename
19. Stat
20. RealPath
21. ReadFile
***/

/***-------------------------------------------------------------------------------------------------------------------------
 1. fs.Dirent 
Cuando fs.readdir() o fs.readdirSync() se llama con la withFileTypes opción establecida en true, la matriz resultante se llena con fs.Direntobjetos, en lugar de cadenas o Buffers.
***/

/***-------------------------------------------------------------------------------------------------------------------------
 *2. fs.watch()
 * Flename, se proporcionará como Buffersi fs.watch() se llama con su encoding opción establecida en 'buffer',
 * de lo contrario filename será una cadena UTF-8.
 * Example when handled through fs.watch() listener
 ***/

fs.watch('./tmp', { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(filename);
    // Prints: <Buffer ...>
  }
});

/***-------------------------------------------------------------------------------------------------------------------------
 * 3. fs.accessSync (ruta [, modo]) 
 ***/

try {
    fs.accessSync('etc/passwd', fs.constants.R_OK | fs.constants.W_OK);
    console.log('can read/write');
  } catch (err) {
    console.error('no access!');
  }

/* fs.access (ruta [, modo], devolución de llamada) */
const file = 'package.json';

/* Check if the file exists in the current directory. */
fs.access(file, fs.constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

/* Check if the file is readable. */
fs.access(file, fs.constants.R_OK, (err) => {
  console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

/* Check if the file is writable. */
fs.access(file, fs.constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

/* Check if the file exists in the current directory, and if it is writable. */
fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
  if (err) {
    console.error(
      `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
  } else {
    console.log(`${file} exists, and it is writable`);
  }
});

/***-------------------------------------------------------------------------------------------------------------------------
 *  4. Open
 ***/

fs.open('/open/some/file.txt', 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});

// Leer :
fs.open('myfile', 'r', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('myfile does not exist');
        return;
      }
      throw err;
    }
    readMyData(fd);
  });

// Escribir:
  fs.open('myfile', 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('myfile already exists');
        return;
      }
      throw err;
    }
    writeMyData(fd);
  });

/***-------------------------------------------------------------------------------------------------------------------------
 * 5. Apend
 ***/

// Asincrono:
  fs.open('message.txt', 'a', (err, fd) => {
  if (err) throw err
  fs.appendFile(fd, 'data to append', 'utf8', (err) => {
    fs.close(fd, (err) => {
      if (err) throw err
    });
    if (err) throw err
  })
})

// Sincrono
try {
    fs.appendFileSync('message.txt', 'data to append');
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
  }

/***-------------------------------------------------------------------------------------------------------------------------
 * 6. fs.openSync()). Y fs.appendFileSync
 ***/ 

let fd;

try {
  fd = fs.openSync('message.txt', 'a');
  fs.appendFileSync(fd, 'data to append', 'utf8');
} catch (err) {
  /* Handle the error */
} finally {
  if (fd !== undefined)
    fs.closeSync(fd);
}

/***-------------------------------------------------------------------------------------------------------------------------
 * 7. fs.copyFile (src, dest [, flags], callback)
 ***/

const fs = require('fs');

/* destination.txt will be created or overwritten by default. */
fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});

// Si el tercer argumento es un número, entonces especifica flags: 
const fs = require('fs');
const { COPYFILE_EXCL } = fs.constants;
/* By using COPYFILE_EXCL, the operation will fail if destination.txt exists. */
fs.copyFile('source.txt', 'destination.txt', COPYFILE_EXCL, callback);

/***-------------------------------------------------------------------------------------------------------------------------
 * 8. Stream
 ***/

const fs = require('fs');
/* Create a stream from some character device. */
const stream = fs.createReadStream('/dev/input/event0');
setTimeout(() => {
  stream.close(); /* This may not close the stream. */
  /* Artificially marking end-of-stream, as if the underlying resource had
   * indicated end-of-file by itself, allows the stream to close.
   * This does not cancel pending read operations, and if there is such an
   * operation, the process may still not be able to exit successfully
   * until it finishes.
   */
  stream.push(null);
  stream.read(0);
}, 100);

//Opciones
optiones = { 'flags': 'r', 'encoding': null, 'mode': 0666, 'bufferSize': 4 * 1024}

/*** Options puede incluir start y end valores para leer un rango de bytes del archivo en lugar de todo el archivo.
 *Un ejemplo para leer los últimos 10 bytes de un archivo que tiene 100 bytes de longitud:
***/

fs.createReadStream('sample.txt', {start: 90, end: 99});

options2 = { 
    'flags': 'w',
    'encoding': null,
    'mode': 0666
}

/***-------------------------------------------------------------------------------------------------------------------------
 *Leer archivo por linea
 ***/
var readline = require('readline');

var reader = readline.createInterface({
  input: fs.createReadStream('archivo-grande.txt')
});

reader.on('line', function (line) {
  console.log(line);
});

/***-------------------------------------------------------------------------------------------------------------------------
 * Escribir archivo por linea
 ***/

var stream = fs.createWriteStream("nuevo.txt");
stream.once('open', function(fd) {
  stream.write("Primera línea\n");
  stream.write("Segunda línea\n");
  stream.end();
});

// Un ejemplo para leer los últimos 10 bytes de un archivo que tiene 100 bytes de longitud:
fs.createReadStream('sample.txt', { start: 90, end: 99 });

/***-------------------------------------------------------------------------------------------------------------------------
 * 9. fs.exists
 * Leer: 
 ***/

fs.open('myfile', 'r', (err, fd) => {
    if (err) {
        if (err.code === 'ENOENT') {
        console.error('myfile does not exist');
        return;
        }
        throw err;
    }
    readMyData(fd);
})

// Escribir:
  fs.open('myfile', 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('myfile already exists');
        return;
      }
      throw err;
    }
    writeMyData(fd);
  });

/***-------------------------------------------------------------------------------------------------------------------------
 * 10. Mkdir
 * Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
 ***/

fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
    if (err) throw err;
  });

/***-------------------------------------------------------------------------------------------------------------------------
 * Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.11. Directorio temporal
 * Genera seis caracteres aleatorios para ser agregados detrás de un requerido prefixpara crear un directorio temporal único.
 * La ruta de la carpeta creada se pasa como una cadena al segundo parámetro de la devolución de llamada.
 * El optionsargumento opcional puede ser una cadena que especifique una codificación, o un objeto con una encodingpropiedad que especifique la codificación de caracteres a usar.
 ***/

fs.mkdtemp(path.join(os.tmpdir(), 'foo-'), (err, folder) => {
  if (err) throw err;
  console.log(folder);
  /* Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2 */
});

// The parent directory for the new temporary directory
const tmpDir = os.tmpdir();

// This method is *CORRECT*:
const { sep } = require('path');
fs.mkdtemp(`${tmpDir}${sep}`, (err, folder) => {
  if (err) throw err;
  console.log(folder);
  /*  Will print something similar to `/tmp/abc123`.
   * A new temporary directory is created within
   * the /tmp directory.
   */
});

/***-------------------------------------------------------------------------------------------------------------------------
 *12. Renme
 ***/

fs.rename('oldFile.txt', 'newFile.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});

/***-------------------------------------------------------------------------------------------------------------------------
 * 13. Eliminar Archivo
 * Assuming that 'path/file.txt' is a regular file.
 ***/

fs.unlink('path/file.txt', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
});

/***-------------------------------------------------------------------------------------------------------------------------
 * 14. WatchFile
 * Esté atento a los cambios en filename. La devolución de llamada listenerse llamará cada vez que se acceda al archivo.
 * El listener recibe dos argumentos del objeto estadística actual y el objeto estadística anterior:
 ***/

fs.watchFile('message.text', (curr, prev) => {
  console.log(`the current mtime is: ${curr.mtime}`);
  console.log(`the previous mtime was: ${prev.mtime}`);
});

/***-------------------------------------------------------------------------------------------------------------------------
 * 15. fs.writeFile (archivo, datos [, opciones], devolución de llamada) [fuente] #
 * Escribe de forma asíncrona los datos en un archivo, reemplazando el archivo si ya existe. Data Puede ser una cadena o un búfer.
 * La encoding opción se ignora si data es un búfer.
 ***/

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

/***-------------------------------------------------------------------------------------------------------------------------
 * 16. filehandle.close () #
 ***/

const fsPromises = require('fs').promises;
async function openAndClose() {
  let filehandle;
  try {
    filehandle = await fsPromises.open('thefile.txt', 'r');
  } finally {
    if (filehandle !== undefined)
      await filehandle.close();
  }
}

/*** 17. filehandle.truncate 
 * Trunca el archivo y luego lo resuelve Promisesin argumentos al tener éxito.
 * Si el archivo era más grande que los len bytes, solo los primeros len bytes serán retenidos en el archivo.
 * Por ejemplo, el siguiente programa conserva solo los primeros cuatro bytes del archivo:
 ***/

const fs = require('fs');
const fsPromises = fs.promises;

console.log(fs.readFileSync('temp.txt', 'utf8'));

async function doTruncate() {
  let filehandle = null;
  try {
    filehandle = await fsPromises.open('temp.txt', 'r+');
    await filehandle.truncate(4);
  } finally {
    if (filehandle) {
      /* close the file if it is opened. */
      await filehandle.close();
    }
  }
  console.log(fs.readFileSync('temp.txt', 'utf8'));  // Prints: Node
}

doTruncate().catch(console.error);

/***-------------------------------------------------------------------------------------------------------------------------
 * 18. fs.rename
 ***/

fs.rename('/tmp/hello', '/tmp/world', (err) => {
    if (err) throw err;
    fs.stat('/tmp/world', (err, stats) => {
        if (err) throw err;
        console.log(`stats: ${JSON.stringify(stats)}`);
    });
});

/***-------------------------------------------------------------------------------------------------------------------------
 * 19. Stat
 ***/

/* Verificar si un archivo o una carpeta existen */
fs.stat('nuevo.txt', function(err) {
  if (err == null) {
    console.log("El archivo existe");
  } else if (err.code == 'ENOENT') {
    console.log("el archivo no existe");
  } else {
    console.log(err); // ocurrió algún error
  }
})

//---------------------------------

fs.stat('/tmp/world', function (err, stats) {
  if (err) throw err;
  console.log('stats: ' + JSON.stringify(stats));
});

/***-------------------------------------------------------------------------------------------------------------------------
 * Podría ser que fs.statse ejecute antes fs.rename. La forma correcta de hacer esto es 
 * encadenar las devoluciones de llamada.
 ***/

fs.rename('/tmp/hello', '/tmp/world', function (err) {
  if (err) throw err;
  fs.stat('/tmp/world', function (err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});

/***-------------------------------------------------------------------------------------------------------------------------
 * 20. RealPath
 * Ruta real asíncrona. El callback obtiene dos argumentos (err,
 * resolvedPath). Puede usarse process.cwd para resolver rutas relativas. 
 * cache es un objeto literal de rutas asignadas que puede usarse para forzar una resolución de ruta específica o evitar  
 * fs.stat llamadas adicionales para rutas reales conocidas.
 ***/

var cache = {'/etc':'/private/etc'};
fs.realpath('/etc/passwd', cache, function (err, resolvedPath) {
  if (err) throw err;
  console.log(resolvedPath);
});

/***-------------------------------------------------------------------------------------------------------------------------
 * 21. ReadFile
 ***/

// ReadFileSync
var text = fs.readFileSync('test.md','utf8')
console.log (text)

// MZ
function leer (archivo) {
    const fs = require('mz/fs');
    fs.readFile(archivo).then(contents => console.log(contents))
      .catch(err => console.error(err))
}

// Async function-  util
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function doStuff() {
  try {
    const content = await readFile(filePath, 'utf8');
    console.log(content);
  } catch (e) {
    console.error(e);
  }
}

// Process.cwd()
var fs = require('fs');
var path = (process.cwd()+"\\text.txt");

fs.readFile(path , function(err,data)
{
    if(err)
        console.log(err)
    else
        console.log(data.toString());
});

// Leer Con Promesas
new Promise((resolve,reject)=>{
    fs.readFile('./index.html','utf-8',(err, data)=>{
        if (err) {
            reject(err); // in the case of error, control flow goes to the catch block with the error occured.
        }
        else{
            resolve(data);  // in the case of success, control flow goes to the then block with the content of the file.
        }
    });
})
.then((data)=>{
    console.log(data); // use your content of the file here (in this then).    
})
.catch((err)=>{
    throw err; //  handle error here.
})































       
       
