//Crea un nuevo objeto, miobjeto, con dos propiedades, a y b.
var miobjeto = new Objecto;
miobjeto.a = 5;
miobjeto.b = 12;

//Elimina la propiedad, dejando miobjeto con sólo la propiedad b.
delete myobj.a;
console.log ("a" in myobj) // yields "false"