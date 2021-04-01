const show = console.log
const R = require('ramda')

/***  
 * Los closures: funciones que manejan variables independientes 
 * Ejemplo: ***/
    function getCounterr(init = 0) {
        var counter = init;
        return function () {
            return ++counter;
        }
    }

    const incCounterr = getCounterr();
        show('\n#1-Closures',
             '\n    incCounterr: ',  incCounterr(),  //-> 1 
             '\n    incCounterr: ',  incCounterr() ) //-> 2. 
             /* Recuerda el estado interno de su padre. A esto se llama closure. */


/* Emular las variables privadas */
    const modules = (function () {
        function _foo() { return 'foo' }
        function foo() { return _foo() }
        return { foo };
    })()

    show('#2-Modules',
         '\n    modules.foo: ', modules.foo(),  //-> 'foo'
         '\n    module._foo() //-> error', '\n')
