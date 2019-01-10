// JSON.parse(text[, reviver]);

//-----------------------------------

obj = eval('({' + str + '})');

//------------------------------------

// Examples:
// 1)

var myobj = JSON.parse('{ "hello":"world" }');
console.log(myobj.hello); // 'world'

// 2)
var myobj = JSON.parse(JSON.stringify({
    hello: "world"
}))
console.log(myobj.hello); // 'world'

// 3) Passing a function to JSON

var obj = {
    hello: "World",
    sayHello: (function() {
        console.log("I say Hello!");
    }).toString()
};

var myobj = JSON.parse(JSON.stringify(obj));
myobj.sayHello = new Function("return ("+myobj.sayHello+")")();
myobj.sayHello();


var properties = string.split(', ');
var obj = {};
properties.forEach(function(property) {
    var tup = property.split(':');
    obj[tup[0]] = tup[1];
});

//------------------------------------

string = "firstName:name1, lastName:last1, profileUrl:http://localhost/site/profile/1";
//split() will split 'http'. So i suggest you use a special delimiter like pipe

string2 = "firstName|name1, lastName|last1";

   var fields = string.split(', '),
        fieldObject = {};

    if( typeof fields === 'object') {
       fields.forEach(element => {
           
       });(function(field) {
          var c = field.split('|');
          fieldObject[c[0]] = c[1];
       });
    }//
    console.log(string)

/***------------------------------------------------------------------------------------------------------
 * El mas viable
*/

var cadena = "Acciones:Herramienta.DM0269OrdenadorRutaReparto, Nombre:Herramienta.DM0269OrdenadorRutaReparto, Boton:100, EnMenu:nel, Activo:nel, Visible:nel"
var properties = cadena.split(', ');
var obj = {};
properties.forEach(function(property) {
    var tup = property.split(':');
    obj[tup[0]] = tup[1];
});
console.log(obj)

'Acciones:Herramienta.DM0269OrdenadorRutaReparto, Nombre:Herramienta.DM0269OrdenadorRutaReparto, Boton:100, EnMenu:nel, Activo:nel, Visible:nel'