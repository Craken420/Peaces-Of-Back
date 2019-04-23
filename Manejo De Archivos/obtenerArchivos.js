const { promisify } = require('util')

const fs = require('fs')
const readdir = promisify(fs.readdir)

async function getFiles(rutaCarpeta) {
    const archivos = await readdir(rutaCarpeta)
    const archivosFiltrados = await Promise.all(archivos.filter(archivo => {
            return /\.txt$/i.test(archivo) && fs.statSync(archivo).isFile()
          })
    )
    return archivosFiltrados.reduce((a, f) => a.concat(f), [])
}

getFiles('Archivos')
    .then(files => {
        console.log(files)
    })
    .catch(e => console.error(e));