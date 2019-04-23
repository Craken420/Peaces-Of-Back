/*** 
 * POO comun: tiene mutaciones 
 * 
 ***/
class Person {
    constructor(name, lastname) {
        this._name = name;
        this._lastname = lastname;
    }

    getFullName() {
        return `${this._name} ${this._lastname}`;
    }
}

/*
 Llamada a la clase
 el objeto que devuelve ‘createPerson’ todavía puede sufrir modificaciones
 con lo que no aseguramos una inmutabilidad pura de los objetos.
 */
const person = new Person('John', 'Doe');
person.getFullName(); // John Doe


/*** Se extrajo la funcion de la clase evitando el acoplamiento 
 * y los únicos valores con los que se trabaja son los que entran como parámetros
 ***/
function getFullName(person) {
    return `${person._name} ${person._lastname}`;
};

/*** Clase funcional ***/
var getFullName = person => [person.name, person.lastname].join(' ');



/*** 
 * Tratar los objetos como valores
 *
 * De esta manera se acceden a los datos para solo lectura y no escritura
 ***/
function createPerson(name, lastname) {
    let _name = name;
    let _lastname = lastname;

    return {
        name: function () {
            return _name;
        },
        lastname: function () {
            return _lastname;
        },
        toString: function () {
            return `${_name} ${_lastname}`;
        }
    };
}

/*** Deep-Freezing de miembros mutables ***/

/*** Evitar mutación en el objeto */
const person = Object.freeze({ 
    name: 'John',
    lastname: 'Doe'
});

person.name = 'Joan'; // Obtenemos un fallo.

/*** Evitar mutación en el objeto */
const person = Object.freeze({ 
    name: 'John',
    lastname: 'Doe',
    address: {
        street: 'Hans Boulevar',
        number: '2'
    }
});

person.address.street = 'Alabama'; // En este caso si cambia la variable.

var isObject = (val) => val && typeof val === 'object';

/*** Evitar mutación en todos los objetos en el objeto */
function deepFreeze(obj) {
    if (isObject(obj) && !Object.isFrozen(obj)) {
        Object.keys(obj).forEach(name => deepFreeze(obj[name]));
        Object.freeze(obj);
    }
    return obj;
}

/**
 * Evita cambio de estado, crea un objeto nuevo.
 * ‘seteo’ similar a orientación a objetos.
 * */
function setlastname(newLastName) {
    return new Person(this._name, newLastName);
}

/*
 Nota: Con cantidad de propiedad y objetos internos mayor sera un código muy extenso
 debido a esto existe una libreria que incluye el mecanismo write-on-copy y
 De esta manera podríamos tener un set y get más típicos de la programación orientada a objetos pero basándose en los principios funcionales.

 Ramda JS
 */
const person = {
    name: 'John',
    lastname: 'Doe'
 };
 const lastnameLens= R.lenseProp('lastname');
 R.view(lastnameLens, person); // get
 R.set(lasntnameLens, 'Dorne', person); // set