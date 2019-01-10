var miObjeto = new Object(),
    cadena = "miCadena",
    aleatorio = Math.random(),
    objeto = new Object()

miObjeto.type                 = "Sintaxis con punto"
miObjeto["Fecha de creación"] = "Cadena con espacios y acento"
miObjeto[cadena]              = "String value"
miObjeto[aleatorio]           = "Número Aleatorio"
miObjeto[objeto]              = "Objeto"
miObjeto[""]                  = "Incluso una cadena vacía"
console.log('\nmiObjeto: \n')
console.log(miObjeto)

/***------------------------------------------------------------------------------------------------------*/

var miAuto = new Object()
miAuto.marca = "Ford"
miAuto.modelo = "Mustang"
miAuto.año = 1969;

console.log('\nmiAuto 0: \n')
console.log(miAuto)

/***------------------------------------------------------------------------------------------------------*/

var nombrePropiedad = "marca"
miAuto[nombrePropiedad] = "Ford"

nombrePropiedad = "modelo"
miAuto[nombrePropiedad] = "Lamborgini"

console.log('\nmiAuto 1: \n')
console.log(miAuto)

/***------------------------------------------------------------------------------------------------------
 * GetOwnPropertyNames
*/

miAuto["marca"] = "Ford"
miAuto["modelo"] = "Mustang"
miAuto["año"] = 1969; 

console.log('\nmiAuto 2 getOwnPropertyNames:  \n')
console.log(Object.getOwnPropertyNames(miAuto))
let x = miAuto
console.log('\n x \= mi auto:  \n')
console.log(x)
console.log('\n x getOwnPropertyNames: \n')
console.log(Object.getOwnPropertyNames(x))
console.log('\n x getPrototypeOf:  \n')
console.log(Object.getPrototypeOf(x))
x=Object.getPrototypeOf(x)
console.log('\n x\=Object.getPrototypeOf(x):  \n')
console.log(x)
console.log('\n x getOwnPropertyNames: \n')
console.log(Object.getOwnPropertyNames(x))

/***------------------------------------------------------------------------------------------------------*/

function mostrarPropiedades(objeto, nombreObjeto) {
    var resultado = ""
    for (var i in objeto) {
      if (objeto.hasOwnProperty(i)) {
          resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n"
      }
    }
    return resultado
}

console.log('\nmostrarPropiedades(miAuto):  \n')
console.log(mostrarPropiedades(miAuto, "miAuto") + '\n---------\n')

/***------------------------------------------------------------------------------------------------------*/

function Perro(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var miperro = new Perro("Eagle", "Talon TSi", 1993);
console.log(miperro)

var kenscar = new Perro("Nissan", "300ZX", 1992);
console.log(kenscar)
var vpgscar = new Perro("Mazda", "Miata", 1990); 
console.log(vpgscar)

/***------------------------------------------------------------------------------------------------------*/

function listaTodasLasPropiedades(o){
    var objetoAInspeccionar
    var resultado = []
 
    for(objetoAInspeccionar = o; objetoAInspeccionar !== null; objetoAInspeccionar = Object.getPrototypeOf(objetoAInspeccionar)) {
       resultado = resultado.concat(Object.getOwnPropertyNames(objetoAInspeccionar)) + "\n"
    }   
 
    return resultado 
 }
 console.log('\nlistaTodasLasPropiedades(miAuto): \n')
 console.log(listaTodasLasPropiedades(miAuto) + '\n---------\n')
 var objeto2 = {}

for (key in miAuto) {
    console.log('\nkey in object: \n')
    console.log(key+':'+miAuto[key])
    objeto2 = { 
       
        2: [key],   // o un numero...
       "propiedad n": 2,
       key: [key],
       [key]: miAuto[key],   // propiedad_# puede ser un identificador...
   } // o una cadena
   
   console.log('\n objeto2 en fors')
   console.log(objeto2)
   console.log('\n objeto2.miAuto[key]\=key')
   console.log('\n  objeto2[miAuto[key]]=\'ola \'\n')
   console.log(objeto2[miAuto[key]]='ola')
   console.log('\n objeto2 en fors\n')
   console.log(objeto2)
   console.log('\nobjeto2[miAuto[key]]: \n')
   console.log(objeto2[miAuto[key]])
   console.log('\nobjeto2[key] = [key]: \n')
   objeto2[key] = [key]
   console.log(objeto2[key] = [key])
   console.log('\n objeto2 en fors\n')
   console.log(objeto2)
}
console.log('\n objeto2 despues del for')
console.log(objeto2)


