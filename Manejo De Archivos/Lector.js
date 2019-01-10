
const { promisify } = require('util')
const { resolve } = require('path')
const fs = require('fs')
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

async function getFiles(dir) {
    const subdirs = await readdir(dir)
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = resolve(dir, subdir)
        return (await stat(res)).isDirectory() ? getFiles(res) : res
    }))
    return files.reduce((a, f) => a.concat(f), [])
}
getFiles('Archivos')
    .then(files => {
        console.log(files) 
        for(file in files) {
            copyFile(files[file]);
        }
    })
    .catch(e => console.error(e));

function readDemo1(file1) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file1, 'Latin1', function (err, dataDemo1) {
            if (err)
                reject(err);
            else{
                resolve(dataDemo1)
            }
        })
    })
}

async function copyFile(file1) {
    try {
        let dataDemo1 = await readDemo1(file1)
        console.log('file: ', JSON.stringify(file1).replace(/.*\\\\/g, ''))
        dataDemo1 = dataDemo1.replace(/\{/g, 'ola')
        await writeDemo2(file1, dataDemo1)
        //console.log(dataDemo1)
    } catch (error) {
        console.error(error);
    }
}

function writeDemo2(file1, dataDemo1) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(file1, dataDemo1, 'Latin1', function(err) {
            if (err)
                reject(err)
            else
                resolve("Promise Success!")
        })
    })
}
