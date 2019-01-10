const express = require('express')
const bodyParser = require("body-parser")


const aplicacion = express()
aplicacion.use(bodyParser.json())
aplicacion.use(express.json())
aplicacion.use(express.urlencoded())
const puerto = 5000
var obj1 = {
    "Herramienta.CambiarUsuario": {
    "nombre": "Herramienta.CambiarUsuario",
    "menu": "Herramientas",
    "nombreDesplegar": "Cambiar Empresa/Usuario",
    "tipoAccion": "Formas",
    "claveAccion": "Acceso"
    },
    "REPMAVI": {
        "nombre": "REPMAVI",
        "menu": "Reportes Mavi",
        "nombreDesplegar": "Reportes Mavi",
        "tipoAccion": "Otros",
        "claveAccion": "Reportes Especiales del Usuario"
    }
}

var obj2 = {
    "EXPAgente": {
    "nombreDesplegar": "Agente modificado",
    },
    "EXPClientInst": {
    "nombre": "EXPClientInst",
    "menu": "Exploradores Mavi",
    "nombreDesplegar": "Clientes Instituciones (RM0935)",
    "tipoAccion": "Formas",
    "claveAccion": "RM0935CtesCatInstFrm"
    },
    "REPMAVI": {
    "nombreDesplegar": "Mavi con cambio",
     "claveAccion": "Se cambio"
    }
    }

// console.log(obj2['REPMAVI']["nombreDesplegar"])
// console.log(obj2['REPMAVI'].nombreDesplegar)

console.log('for')
for (key in obj1) {
  let cadena = [key]
  console.log('\n-----------------------------------------\n')
  console.log(cadena)
 
  if (obj2[key]!=undefined) {
      console.log('\ncoincidencia con : '+ [key] +'  en el obj2\n')
      console.log('\n**************************')
      console.log(`Contenido obj2 en ${key}`)
      console.log(obj2[key])
      console.log('\n**************************')
      console.log('\nObject.getOwnPropertyNames(obj2[key]):\n')
      let cadena = Object.getOwnPropertyNames(obj2[key])
      console.log(cadena)
      console.log('\n**************************')
      console.log('\ncadena[key]\n')
      for (key2 in cadena) {
        console.log(cadena[key2])
        console.log('\ncobj2[key][cadena]-- valor del campo ejem(obj2[EXPAgente][nombreDesplegar]= ¡¡  soy el campo a modificar !!\n')
        console.log(obj2[key][cadena[key2]])
        console.log('\n**************************')
        console.log('\nObjeto Sin Cambio\n')
        console.log(obj1[key])
        console.log('\n**************************')
        console.log('\nObjeto Con Cambio\n')
        obj1[key][cadena[key2]] = obj2[key][cadena[key2]]
        console.log(obj1[key])
        console.log('\n**************************')
       }
  }
  delete obj2[key];
}

console.log('\nAl terminal el proceso del for obj1')
console.log(obj1)
console.log('\nAl terminal el proceso del for obj2')
console.log(obj2)
var obj = Object.assign(obj1, obj2);
console.log('\nAl terminal el proceso del for obj')
console.log(obj)
aplicacion.get('/', (solicitud, respuesta) => {
      console.log('Enviando al navegador')
      respuesta.send(obj)
})

var servidor = aplicacion.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`)
})
