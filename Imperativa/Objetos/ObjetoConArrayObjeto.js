var properties = new Object();
      properties.version = "1";
      properties.finish = "0";
      properties.number = 3;
      
// se agrega al arreglo el objeto
var arrayProperties = new Array();
arrayProperties.push(properties);

// Agregamos el arreglo de objetos de propiedades
var miObjeto = new Object();
miObjeto.nombre = "Pedro";
miObjeto.edad = 12;
miObjeto.mascota = "Gato";
miObjeto.properties = arrayProperties;

var myString = JSON.stringify(miObjeto);
var myObj = JSON.parse(myString);