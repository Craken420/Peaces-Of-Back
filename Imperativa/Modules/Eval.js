// let cakeJSON =  "id" 


// var myCakes = eval('(' + cakeJSON + ')');
// console.log(myCakes.name); // donut
// console.log(myCakes.image.width); // 200




/*** 
 * Casi descartado pero se descubrio que si haces 
 * un correcto uso esta de lujo ;)
 */

var string1 = "foo";
var string2 = "bar";
var funcName = string1 + string2;
 
function foobar(){
//   console.log( 'Eval - Evil' );
}
 
eval( funcName + '()' );  // Hello World


//let codRun = console.log( 'Eval - Evil en New Function()' )
// let sum = new Function('a', 'b', 'return a + b');
let saludo = 'ola'
let despedida = 'adios'
// let paramsFn = `\'a\', \'b\'`
let bodyFn = `console.log(\'ola, salud desde el new Function: \', \' a: \',a,\' b: \',b)`
var tmpFunc = new Function('a','b', bodyFn);
// tmpFunc(saludo, despedida)

/**
 * Desventajas
 * Resulta complicado de leer
 * Pesado y lento debido a que necesita ejecutar el compilador interno.
 * Compromete seguridad en la aplicación 
 * al proporcionar un protagonismo excesivo a la cadena suministrada. 
 * Validar el eval code resulta por lo general complejo.
 */

/*
 * Alternativas al uso de eval
 * alternativas válidas a su uso para que nuestras aplicaciones sean legibles, 
 * rápidas y seguras.
 * 
 * Método 1
 * En la mayoría de los casos, recurrimos a eval para ejecutar una función
 * cuyo nombre componemos deforma dinámica o para evaluar nombres de variables:
**/

let nume = '29 '
let myValues = ' 19'
let strin = nume + '+' + myValues
// console.log(strin, ' = ' , eval(strin))


/*
 * Una alternativa limpia es llamar a la variable a través de su contexto.
 * Las variables Javascript pertenecen a un ámbito concreto: 
 * o bien han sido declaradas dentro de una función (finalmente un objeto) o, 
 * si son globales, pertenecen al Objeto General (Object General) definido como window.

El código anterior puede refactorizarse como sigue:
*/
// window['myvar' + num] = myValue;
/*
 * NOTA:
 * Para acceder a la propiedad de un objeto a través de un nombre dinámico, 
 * utilizamos la notación con corchetes en lugar de la notación mediante punto:
**/

// Correcto

let numer = '29 '
let myVal = ' 19'
let str = numer + '+' + myVal
// console.log(strin, ' = ' , eval(strin))
// let window = {}

// window[str] = myVal

// Incorrecto
//window.myvar + num = myValue; // SyntaxError: invalid assignment left-hand
/*Con este nuevo código, hemos evitamos lanzar el compilador interno del intérprete ganando rapidez; hemos ganamos legibilidad e impedimos la ejecución a ciegas de la cadena resultante.
*/

/*
 * Método 2
 * Cuando la cadena (eval code) es más compleja, 
 * podemos recurrir al uso del constructor del objeto Function. 
**/
let codeToRun = 'console.log(\'codetorun\')'
// eval(codeToRun);

// Puede escribirse también como:

var tmpFunc = new Function(codeToRun);
// tmpFunc();

/*
 * Este método es mucho más limpio y, 
 * cuando el argumento está compuesto por varias líneas de código, 
 * resulta también más legible. Además, es más rapido: 
 * invocar a un constructor siempre resulta más ligero que recompilar código.
 * 
 * Sin embargo, esta solución no llega a ser más segura que eval.
 * Finalmente, estaríamos ejecutando de nuevo código a ciegas por lo que su uso,
 * debería evitarse en la misma medida.
 * 
 * El mismo Douglas Crockford escribió al respecto: 
 * “El constructor Function es una forma de eval”.

/*
 * Método 3
 * Finalmente, podemos añadir otra alternativa (derivada de la anterior) 
 * gracias a las características de los constructores Javascript. 
 * Elegante, limpia, pero algo compleja de entender tras un primer vistazo, tendríamos:
*/

/* 
    myvar: {
        constructor: function mystring ()
    }
*/

var myVar = "constructor";
var myString = "console.log( 'Hello World' )";
// myVar[myVar][myVar]( myString )();  // Hello World

/*¿Qué ha ocurrido en este código? Veámoslo paso a paso:*/
console.log(myVar[myVar]) //=> function String()  (constructor de una cadena) 
 
console.log(myVar[myVar][myVar]) //=> [Function: Function]
//function Function() (constructor de un String)
console.log(myVar[myVar][myVar]( myString )) //=> [Function: anonymous]

myVar[myVar][myVar]( myString )();  // Hello World
/*
    El constructor de una cadena es String 
    y el constructor de un String es una función (Function).
    Ahora está algo más claro: como hemos visto en el segundo método,
    el constructor Function acepta una cadena que interpreta como código,
    por lo que el ejemplo anterior es solo una forma alternativa de obtener
    dicho constructor.

    ¿Y qué hacemos con el caso JSON?
    A la hora de evaluar una cadena JSON,
    tenemos a nuestra disposición funciones específicas
    que utilizan expresiones regulares para evitar código inapropiado.
    Librerías como jQuery o Mootols tienen sus propios métodos seguros.
    La propia especificación ECMAScript5 ya proporciona estas funciones
    de forma nativa.

    Conclusión
    El uso de eval está considerado como una mala práctica. 
    Si necesitamos utilizarlo, seguramente se deba a que nuestro código
    está mal estructurado y podríamos evitarlo reorganizándolo.

    Sin embargo, como apuntan otros desarrolladores, 
    usado de forma consciente es una herramienta poderosa
    capaz de crear estupendas aplicaciones imposibles de otro modo.
    Basta con recordar que hasta versiones recientes,
    jQuery utilizaba la función eval para trabajar con las ya mencionadas
    cadenas JSON.

    Tenemos que ser conscientes de los riesgos que conlleva
    y decidir si podemos utilizar esta función sin comprometer todo el sistema.

    Finalmente, responder a si debemos o no utilizar eval en nuestro código
    es sencillo: si conocemos con certeza la fuente de los datos,
    no tendríamos que tener mayor problema. 
    Si por el contrario el texto proviene de terceros, es crítico revisar
*/