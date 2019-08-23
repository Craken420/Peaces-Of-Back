const R = require('ramda')

/* La gestión de errores en lenguajes imperativos 
    Se coloca el codigo vulnerable a errores
*/

function myFunction() {
    try {
       // código a ejecutar 
    } catch (err) {
       // gestión del error
    }
}

/*
    Check-Null
    Cuando una función no funciona correctamente es mejor devolver ‘null’
    No es la mas viable
*/
function getCountry(client) {
    let job = client.getJob();

    if (job !== null) {
        let address = job.getAddress();

        if (address !== null) {
             return address.getCountry();
        }

        return null;
    }
       
    return null;
}

/* Patron de diseño Functores */
class Wrapper {
    constructor(value) {
        this._value = value;
    }

    map(fn) {
        return fn(this._value);
    }

    toString() {
       return `Wrapper [${this._value}]`; 
    }
}


const wrap = (val) => new Wrapper(val);

// Uso
// const stringWrapper = wrap('Hello World');

// console.log(stringWrapper.map(R.identity)); // Hello World
// stringWrapper.map(R.toUpper); // HELLO WORLD
// stringWrapper.map(console.log);

/*

La función ‘map’ tiene un pequeño problema 
y es que cuando terminamos de ejecutar la función que se pasa como parámetro, 
nos devuelve un valor.
Es como si después de tener a nuestro gato (valor) tanto tiempo en resguardo
en nuestra casa (envoltorio) llegara nuestro vecino (función que ejecuta el ‘map’) 
y se lo llevase en su primera visita.

Podemos solucionar esto con el siguiente método:
*/
Wrapper.prototype.fmap = function (fn) {
    return wrap(fn(this._value));
}

/* Creamos un objeto de la clase Wrapper asigando a su vez el valor con el constructor */
const numberWrap = wrap(2);


const sum5 = num => num + 5;

/* Ejecutamos */
console.log(numberWrap.fmap(R.add(9))); // return Wrapper(7)
console.log(numberWrap.fmap(sum5).fmap(sum5).fmap(sum5)); // return Wrapper(17)


/* Another Example */
const add1 = (a) => a + 1;
class MyFunctor { //Custom "Functor"
  constructor(value) {
    this.val = value;
  }
  map(fn) {   //Applies function to this.val + returns new Myfunctor
   return new Myfunctor(fn(this.val));
  }
}
//temp is a Functor instance that's storing value 1
let temp = new MyFunctor(1); 
temp.map(add1) //-> temp allows us to map "add1"