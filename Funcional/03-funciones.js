const show = console.log
const R = require('ramda')

/*-------------------------------------------------------------
    Alcance del this
---------------------------------------------------------------*/
    
    var Lanes = {
        name: "Lane the Lambda",
        desc: function () { return this.name; }, /* undefined con ‘strict mode’. */
        descLamda: () => this.name // No tiene alcance
    };

    show('\n#1-Alcance del this:',
         '\n    Lanes.desc: ', Lanes.desc(),
         '\n    Lanes.descLamda: ', Lanes.descLamda() )

/*-------------------------------------------------------------
    Ciudadanos de primera clase: Funciones independientes
---------------------------------------------------------------*/
    function addIp(a, b) { return a + b; }
    const addFunct = (a, b) => a + b
    const calc = { addInObj: (a, b) => a + b }
    var addNew = new Function('a', 'b', 'return a + b'); // No recomendable

/*-------------------------------------------------------------
    Entidades de orden superior: Funciones conformadas por otras funciones.
---------------------------------------------------------------*/
    
    function applyOperations(a, b, opt)  { return opt(a, b); }
    
    show('\n#2-Entidades de orden superior:',
         '\n    applyOperations(2, 3, sum): ', applyOperations(2, 3, addFunct) );

/*-------------------------------------------------------------
    Curryficación
---------------------------------------------------------------*/
    function addCurry (a) {
        return function (b) {
            return a + b;
        }
    }
    show('\n#3-Curryficación:',
         '\n    addCurry(2): ', addCurry(2),
         '\n    addCurry(2)(3): ', addCurry(2)(3) )

/*-------------------------------------------------------------
    Ámbitos
---------------------------------------------------------------*/

    /* Global: variable fuera de la funcion disponible internamente */
    const x = 5
    function printX() { show('\t\t' + x ) }
        show('\n#4-Ámbitos:',
             '\n  #4.1-Global:',
             '\n      const x = 5',
             '\n      function printX() { show(5) }',
             '\n      printX():')
                      printX() 

    /* Funcion: variable dentro de la funcion no disponible externamente */
        show('\n  #4.2-Funcion:',
             '\n      function fooo() {const y = 5} ',
             '\n      console.log(y) -> ReferenceError: y is not defined') // ReferenceError: y is not defined

    /* Bloque: ejemplo de uso en el if, while, for o switch. 
               Evita ‘hoisting’: Re-escritura. */
        
        
        /* El var i del for sera alcanzado por multipleBy10 saliendo en la segunda vuelta */
        var arr = [1, 2, 3, 4];
        function processArrr() {
            function multipleBy10(vall) {
                i = 10; 
                return vall * i;
            }

            for (var i = 0; i < arr.length; i++) {
                arr[i] = multipleBy10(arr[i]);
            }

            return arr;
        }

        show('\n  #4.3-Bloque:',
             '\n      processArrr var For: ', processArrr() );

        /* Mismo caso con declaración global */
            var arr2 = [1, 2, 3, 4];
            function processArr2() {
                var i;
                function multipleBy10(val) {
                    i = 10;
                    return val * i;
                }
                for (i = 0; i < arr2.length; i++) { 
                    arr2[i] = multipleBy10(arr2[i]);
                }
                return arr2;
            }
                show( '      processArr2 var Glob: ', processArr2() ); 

        /* Solución: Let */
            var arr3 = [1, 2, 3, 4];
            function processArr3() {
                var i;
                function multipleBy10(val) {
                    i = 10;
                    return val * i;
                }
                for (let i = 0; i < arr3.length; i++) { 
                    arr3[i] = multipleBy10(arr3[i]);
                }
                return arr3;
            }
            show( '      processArr3 Let: ', processArr3(), '\n'); // El var i sera alcanzado por la función y el for
        