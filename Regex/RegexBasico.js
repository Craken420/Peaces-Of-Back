//Crear una expresion regular con New Regex

var cadena = 'pattern'
str1 = `${cadena}`
var re = new RegExp(str1, "g");
let texto = "pattern matching .".replace(re, "regex");
console.log(texto)

var cadena2 = 'Exp.MaviRefin'
let str2 = `\\[MenuPrincipal.dlg\/Acciones\\.${cadena2}\\] `
var re2 = new RegExp(str2, "g");
let texto2 = "Ola [MenuPrincipal.dlg/Acciones.Exp.MaviRefin] Adios".replace(re2, "regex");
console.log('Expresion Regular Creada: ' + re2)
console.log(texto2)

/***------------------------------------------------------------------------------------------------------
 * Replace con CallBack
 ***/
"hello _there_".replace(/_(.*?)_/, function(a, b){
  return '<div>' + b + '</div>';
})