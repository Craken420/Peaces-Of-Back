const show = console.log
const R = require('ramda')

/*-------------------------------------------------------------
 Creacion y uso de clases
---------------------------------------------------------------*/
    class Person {
        constructor(name, lastname) {
            this.name = name;
            this.lastname = lastname;
        }
        getFullName() {
            return `${this.name} ${this.lastname}`;
        }
    }

    /* Función extraida para no acoplar y solo usar los parámetros */
        function getFullName(person) { return `${person._name} ${person.lastname}`; } //-> John Doe

    /* Clase funcional */
        var getFullName = pers => [pers.name, pers.lastname].join(' '); //-> John Doe

/*-------------------------------------------------------------
 Mutaciones
---------------------------------------------------------------*/

/* 1: Objetos como valores para lectura y no escritura */

    const personMutable = new Person('John', 'Doe');

    // show('\n#1-Mutación simple:',
    //      '\n    Origen:', personMutable.getFullName(),
    //      '\n    Cambio:', 'name = Angel',
    //             personMutable.name = 'Angel', // Mutación indevida.
    //      '\n    ResulFinal:', personMutable.getFullName() )

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

    const persNoMuta = createPerson('Malvo','Dona');

    // show('\n#1.1-Objeto como valor:',
    //      '\n    Origen:', persNoMuta.toString(),
    //      '\n    Cambio: name = Geronimo',
    //             persNoMuta.name = 'Geronimo', // No muta.
    //      '\n    Resulfinal:', persNoMuta.toString() )


/* 2: Object.Freeze */
    const persNoMuta2 = Object.freeze( new Person('Hellsing', 'Vampire') );

    // show('\n#1.2-Objeto freeze:',
    //      '\n    Origen:', persNoMuta2.getFullName(),
    //      '\n    Cambio: name = Hombre lobo',
    //             persNoMuta2.name = 'GeroHombre lobonimo', // No muta.
    //      '\n    Resulfinal:', persNoMuta2.getFullName() )


/* 2: Mutación profunda en el objeto */
    const deepObj1 = Object.freeze({ 
        name: 'John',
        lastname: 'Doe',
        address: {
            street: 'Hans Boulevar',
            number: '2'
        }
    })
        
    // show('\n#2-Mutación Profunda:',
    //      '\n    deepObj1:\n', deepObj1,
    //      '\n    Cambio: address.street = Alabama',
    //             deepObj1.address.street = 'Alabama',  // Mutación indevida
    //      '\n    ResulFinal:\n', deepObj1 )
   
/* Solución */
    var isObject = (val) => val && typeof val === 'object';

    function deepFreeze(obj) {
        if (isObject(obj) && !Object.isFrozen(obj)) {
            Object.keys(obj).forEach(name => deepFreeze(obj[name]));
            Object.freeze(obj);
        }
        return obj;
    }

    const deepObj2 = deepFreeze({ 
        name: 'John',
        lastname: 'Doe',
        address: {
            street: 'Hans Boulevar',
            number: '2'
        }
    })

    // show('\n#2.1-Solución deepFreezeado',
    //      '\n    deepObj2:\n', deepObj2,
    //      '\n    Cambio: address.street = Alabama',
    //             deepObj2.address.street = 'Alabama',  //-> Mutación indevida.
    //      '\n    ResulFinal:\n', deepObj2 )

/*-------------------------------------------------------------
Getter y Setter
---------------------------------------------------------------*/
function createPersonGetSet(name, lastname) {
    let _name = name;
    let _lastname = lastname;
    return {
        getName: () => _name,
        getLastname: () => _lastname,
        // En el seteo mejor crear un objeto nuevo para evitar mutaciones
        setName: function (newName) {
            return createPersonGetSet(newName, this.getLastname() );
        },
        setLastName: function (newLastName) {
            return createPersonGetSet( this.getName(), newLastName );
        },
        toString: () => `${_name} ${_lastname}`
    }
}

const person4 = createPersonGetSet('John','Doe');

show( '\n#3.1-GetSet',
        '\n    person4:', person4.toString(),
        '\n    setName(Angel) Retorna nuevo obj:', person4.setName('Angel').toString(),
        '\n    person4:', person4.toString() )

/* Ramda Js: Para reducir código usando write-on-copy. */
    // const person7 = {
    //     name: 'John',
    //     lastname: 'Doe'
    // }
    // const lastnameLens = R.lensProp('lastname');
    // show('\n#3.2-GetSet Ramda',
    //      '\n    person7:', person7,
    //      '\n    R.set(Pesado) Retorna nuevo obj:\n    ', 
    //             R.set(lastnameLens, 'Pesado', person7), //-> set
    //      '\n    person7:', person7, '\n')

module.exports.objs = {
    createPersonGetSet: createPersonGetSet,
    deepFreeze: deepFreeze
}