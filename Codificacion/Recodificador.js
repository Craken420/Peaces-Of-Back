var fs = require('fs'); 
const archivo = 'C:/Users/lapena/Documents/Luis Angel/Intelisis/Intelisis3100/Codigo Original/MenuPrincipal.dlg'
const encoding = 'utf-8'
var iconvlite = require('iconv-lite'); 
var fs = require('fs'); 

function readFileSync_encoding(filename, encoding) { 
    var content = fs.readFileSync(filename); 
    return iconvlite.decode(content, encoding); 
} 

console.log(readFileSync_encoding(archivo, encoding))