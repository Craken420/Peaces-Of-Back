// Ejemplo: Usando el objeto MapSección
var miMapa = new Map();

var claveObj = {},
    claveFunc = function () {},
    claveCadena = "una cadena";

// asignando valores
miMapa.set(claveCadena, "valor asociado con 'una cadena'");
miMapa.set(claveObj, "valor asociado con claveObj");
miMapa.set(claveFunc, "valor asociado with claveFunc");



miMapa.size; // 3

// obteniendo los valores
miMapa.get(claveCadena);    // "valor asociado con 'una cadena'"
miMapa.get(claveObj);       // "valor asociado con claveObj"
miMapa.get(claveFunc);      // "valor asociado con claveFunc"

miMapa.get("una cadena");   // ""valor asociado con 'una cadena'"
                         // porque claveCadena === 'una cadena'
miMapa.get({});           // undefined, porque claveObj !== {}
miMapa.get(function() {}) // undefined, porque claveFunc !== function () {}

console.log(miMapa.get(claveCadena))
console.log(miMapa.get(claveObj))
console.log(miMapa.get(claveFunc))



// Ejemplo: Usando NaN como claves de MapSección
// NaN también puede ser usado como una clave. Aún cuando cada clave NaN no es igual a sí misma (NaN !== NaN es verdadera), el siguiente ejemplo funciona, porque las claves NaNs NaNs no son distinguibles unas de otras:

var miMapa = new Map();
miMapa.set(NaN, "no es un número");

miMapa.get(NaN); // "no es un número"

var otroNaN = Number("foo");
miMapa.get(otroNaN); // "no es un número"





// Ejemplo: Iterando Map con for..ofSección
// Los Map pueden ser iterados usando un bucle for..of:

var miMapa = new Map();
miMapa.set(0, "cero");
miMapa.set(1, "uno");
for (var [clave, valor] of miMapa) {
  console.log(clave + " = " + valor);
}
// Mostrará 2 alertas; primero con "0 = cero" y segundo con "1 = uno"

for (var clave of miMapa.keys()) {
    console.log(clave);
}
// Mostrará 2 alertasas; primero con "0" y segundo con "1"

for (var valor of miMapa.values()) {
  console.log(valor);
}
// Mostrará 2 console.logas; primero con "cero" y segundo con "uno"

for (var [clave, valor] of miMapa.entries()) {
  console.log(clave + " = " + valor);
}
// Mostrará 2 console.logas; primero con "0 = cero" y segundo con "1 = uno"

miMapa.forEach(function(valor, clave, miMapa) {
  console.log(clave + " = " + valor);
})
// Mostrará 2 console.logas; primero con "0 = cero" y segundo con "1 = uno"

// Iterando Maps usando forEach()Sección
// Los Map pueden ser iterados usando el método forEach():

miMapa.forEach(function(valor, clave) {
//  // console.log(clave + ' = ' + valor);
});
// Mostrará 2 logs; el primero con "0 = cero" y el segundo con "1 = uno"






// Ejemplo: Relación con los objetos ArraySección
// var kvArray = [["clave1", "valor1"], ["clave2", "valor2"]];

// El constructor por defecto de Map para transforar un Array 2D (clave-valor) en un mapa
var miMapa = new Map(kvArray);

miMapa.get("clave1"); // devuelve "valor1"

// Usando la función Array.from para transformar el mapa a un Array 2D clave-valor.
//// console.log(Array.from(miMapa)); // Muestra exactamente el mismo Array que kvArray

// O usando los iteradores de claves o valores y convirtiendo a array.
// //console.log(Array.from(miMapa.keys())); // Muestra ["clave1", "clave2"]

/*

*/