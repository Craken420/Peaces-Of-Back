var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else { 
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}
//Tip: To use less resources when filtering. Filter within this function itself. E.g. Replace results.push(file); with below code. Adjust as required:

    file_type = file.split(".").pop();
    file_name = file.split(/(\\|\/)/g).pop();
    if (file_type == "json") results.push(file);

//-------------------------------------------------------------------------


const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}
//Usage:

getFiles(__dirname)
  .then(files => console.log(files))
  .catch(e => console.error(e));

// Node 10+
// Updated for node 10+ with even more whizbang:

const { resolve } = require('path');
const { readdir, stat } = require('fs').promises;

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

//-------------------------------------------------------------------------

//Node 11+
//If you want to blow everybody's head up completely, you can use the following version using async iterators. In addition to being really cool, it also allows consumers to pull out results one-at-a-time, making it better suited for really large directories.

const { resolve } = require('path');
const { readdir, stat } = require('fs').promises;

async function* getFiles(dir) {
  const subdirs = await readdir(dir);
  for (const subdir of subdirs) {
    const res = resolve(dir, subdir);
    if ((await stat(res)).isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}
//Usage has changed because the return type is now an async iterator instead of a promise

(async () => {
  for await (const f of getFiles('.')) {
    console.log(f);
  }
})()