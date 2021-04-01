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


/***------------------------------------------------------------------------------------------------------
 * El mas viable
*/

var cadena = "Acciones:Herramienta.DM0269OrdenadorRutaReparto, Nombre:Herramienta.DM0269OrdenadorRutaReparto, Boton:100, EnMenu:nel, Activo:nel, Visible:nel"
var properties = cadena.split(/,(\s+|)/);
var obj = {};
properties.forEach(function(property) {
    var tup = property.split(':');
    obj[tup[0]] = tup[1];
});
console.log(obj)
