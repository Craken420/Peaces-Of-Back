var replaceExt = require('replace-ext');

// let archivo= 'dbo.SpCREDIObtenerAgrupaciones.StoredProcedure.sql'
// let nuevoArchivo = 'dbo.SpCREDIObtenerAgrupaciones.StoredProcedures.txt'

 var path = 'dbo.SpCREDIObtenerAgrupaciones.StoredProcedure.sql';
 var newPath = replaceExt(path, '.txt');
 
 console.log(newPath); // /some/dir/file.coffee


