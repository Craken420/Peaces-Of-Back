const fs = require('fs')

const { detectarCodificacion } = require('./Utilerias/Codificacion/procesadorCodificacion')
const { leerCarpetaFiltrada } = require('./Utilerias/OperadoresArchivos/readDirOnlyFile')
const { recodificarArchivo }= require('./Utilerias/Codificacion/procesadorCodificacion')
const iconvlite = require('iconv-lite')
//const carpeta = 'Testing\\'
const { StringDecoder } = require('string_decoder');
const carpetaOriginal5000 = 'C:\\Users\\lapena\\Documents\\Luis Angel\\Sección Mavi\\NewIntelisis\\Intelisis5000\\Codigo Original\\'
var ruta = 'Testing/'

function cambiarCodificacion (carpeta, arrExtensiones) {
    leerCarpetaFiltrada(carpeta, arrExtensiones)
    .then(archivos => {

        archivos.forEach(archivo =>  {
			// console.log('Antes: ', detectarCodificacion(archivo))
            // console.log(archivo.replace(/.*\\/g, ''))
			//const data = fs.readFileSync(archivo)
			
			// console.log(data)
			// console.log(typeof(data))
			//let content = new Buffer(data)
			
			// fs.writeFileSync(archivo, readFileSync_encoding(archivo, 'utf8'))
			// console.log('Despues: ', detectarCodificacion(archivo))
			// let text = readFileSync_encoding(archivo, 'ucs2')
			// console.log(typeof(text))
			// text = text.replace(/&aacute/g, 'á')
			// text = text.replace(/&aacute/g, 'á')
			// text = text.replace(/&eacute/g, 'é')
			// text = text.replace(/&iacute/g, 'é')
			// text = text.replace(/&oacute/g, 'ó')
			// text = text.replace(/&uacute/g, 'ú')
			// text = text.replace(/&nacute/g, 'ñ')
			let code = 'base64'
			let data = fs.readFileSync(archivo)
			console.log(data.toString(code));
			const decoder = new StringDecoder('latin1');
			
			fs.writeFileSync(archivo, decoder.write(data))
			// fs.writeFileSync(archivo, data.toString(code))
			
		})
	})
}


// var Iconv = require('iconv').Iconv;

// function readFileSync_encoding(filename, encoding) {
//     var content = fs.readFileSync(filename);
//     var iconv = new Iconv(encoding, 'UTF-8');
//     var buffer = iconv.convert(content);
//     return buffer.toString('utf8');
// }


function readFileSync_encoding(filename, encoding) {
    var content = fs.readFileSync(filename);
    return iconvlite.decode(content, encoding);
}

cambiarCodificacion(ruta,  ['.vis','.frm','.esp','.tbl','.rep','.dlg'])