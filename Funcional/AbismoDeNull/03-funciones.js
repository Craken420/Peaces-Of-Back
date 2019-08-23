
/***
    Funciones compartidas y this

    4 formas de llamar una funcion
***/

var Lanes = {
  name: "Lane the Lambda",
  description: function () {
    return this.name;
  }
};
var description = Lanes.description;
var Fred = {
  description: Lanes.description,
  name: "Fred the Functor"
};
// Call the function from four different scopes
// console.log(Lanes.description());
// console.log(Fred.description());
// console.log(description());
// console.log(description.call({
//   name: "Zed the Zetabyte"
// }));

/*** Ciudadanos de primera clase ***/

function addd(a, b) {
    return a + b;
}

var adddd = function(a, b) {
    return a + b
}

var addddd = (a, b) => a + b

var calc = {
    adddddd: (a, b) => a + b
}

var add = new Function('a', 'b', 'return a + b');

/*** Entidades de orden superior ***/

function applyOperations(a, b, opt)  {
    return opt(a, b);
}

applyOperations(2, 3, add);

function ad (a) {
    return function (b) {
        return a + b;
    }
}
console.log(ad(2)(3))

/* Formas de invocar una función con this*/

// Como una función global:
function setInit() {
    this.init = 'Hello World';
}
setInit();

// En este caso ‘this’ señala al objeto global o a undefined si hemos indicado el ‘strict mode’.

// Como un método de un objeto:
const objs = {
    prop: 'Hello World',
    getProp: function () {
        return this.prop;
    }
}
objs.getProp();

/*** Identificando el puntero 'this' ***/
objs.getProp(); // apunta a obj porque está a la izquierda del punto
//window.getProp(); // apunta a window (objeto global) porque está a la izquierda del punto

/*
Como un constructor anteponiendo un ‘new’ a la llamada:
Apunta a obj debido a que new’ se encarga de hacer referencia del ‘this’ a dicho objeto.
*/
function Objt()  {
    this.prop = 'Hello World';
}
const objt = new Objt();


/***  Los ámbitos  ***/

//El ámbito global
const x = 5;
function printX() {
    // console.log(x);
}
printX(); // pinta 5

// El ámbito función:
function fooo() {
    const x = 5;
}
// console.log(x); // undefined.


// El ámbito de bloque:
var arrr = [1, 2, 3, 4];
function processArrr() {
    function multipleBy10(vall) {
        i = 10;
        return vall * i;
    }

    for (var i = 0; i < arrr.length; i++) {
         arrr[i] = multipleBy10(arrr[i]);
    }

    return arr;
}
processArrr(); // [10, 2, 3, 4];
/*
 El problema en este algoritmo es que viene a un proceso que se llama ‘hoisting’.
 JavaScript cuando evalua una función, lo primero que hace
 es buscar todas las variables y funciones y rescribirlo.
 Ese var i = 0 que observamos en el for se transforma en esta forma:
*/
var arr = [1, 2, 3, 4];
function processArr() {
    var i;

    function multipleBy10(val) {
        i = 10;
        return val * i;
    }

    for (i = 0; i < arr.length; i++) {
         arr[i] = multipleBy10(arr[i]);
    }

    return arr;
}
processArr(); // [10, 2, 3, 4];


/***  Los closures  ***/
function getCounterr(init = 0) {
    var counter = init;

    return function () {
        return ++counter;
    }
}

const incCounterr = getCounterr();
incCounterr(); // 1
incCounterr(); // 2

//Son importantes aspectos a la hora de programar:

// Emular las variables privadas:
const modules = (function () {
    return {
        foo,
        boo
    };
    
    function foo() {
        return _foo();
    }

    function boo() {
        return _boo();
    }

    function _foo() {
        return 'foo';
    }

    function _boo() {
        return 'boo';
    }
})();

modules.foo() // 'foo'
// module._foo() // error
// module.boo() // 'boo'
// module._boo() // error
