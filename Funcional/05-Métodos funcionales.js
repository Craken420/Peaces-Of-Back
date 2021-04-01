const show = console.log
const R = require('ramda')

/* Control de flujo en una aplicación: posibles caminos para una solución determinada. */

/*-------------------------------------------------------------
   Los métodos funcionales
---------------------------------------------------------------*/

    /* Reduce */
        function reduce(arr, fn,[accumulator]) {
            let idx = -1,
                len = arr.length;
            if (!accumulator && len > 0) {
                accumulator = arr[++idx];
            }
            while (++idx < len) {
                accumulator = fn(accumulator,
                arr[idx], idx, arr);
            }
            return accumulator;
        }
     
        const arrayReduce = [1, 2, 3]
        const fnSum = (accumulator, currentValue) => accumulator + currentValue

        show('\n#1-Reduce:',
             '\n    Entry: [1, 2, 3]',
             '\n    Sum All: ', arrayReduce.reduce(fnSum), //-> 10 // 1 + 2 + 3 + 4
             '\n    Sum All begin with 5: ', arrayReduce.reduce(fnSum, 5) ) //-> 15 // 5 + 1 + 2 + 3 + 4

    /* Filter */
        function filter(arr, predicate) {
            let idx = -1,
                len = arr.length,
                result = [];
            while (++idx < len) {
            let value = arr[idx];
            if (predicate(value, idx, this)) {
                result.push(value);
            }
            }
            return result;
        }
          
        const arrayF=  [1, 2, 3, 4]
        let arrayFilter = arrayF.filter(x => x % 2 === 0) 

        show('\n#2-Filter:',
             '\n    Entry: [1, 2, 3, 4]',
             '\n    Filter odd: ', arrayFilter ) //-> [2, 4,]
    
    /* Map */
        function map(arr, fn) {
            let idx    = 0,
                len    = arr.length,  
                result = new Array(len);
            while (++idx < len) {
                result[index] = fn(array[idx], idx, arr);
            }      
            return result;
        }
          
        const arrayM =  [1, 2, 3]
        let arrayMap = arrayM.map(x => x * 2) 

        show('\n#3-Map:',
             '\n    Entry:[1, 2, 3]',
             '\n    Map x 2:', arrayMap ) //-> [2, 4, 6]

/*-------------------------------------------------------------
    Métodos encadenados (Patrón de diseño para POO):
---------------------------------------------------------------*/
    /* Ejemplo 1: */
        const resuExa1 = 'Hello World'
                            .substring(0, 5)
                            .toUpperCase()
                            
        show('\n#4-Métodos encadenados:',
             '\n  #4.1-Example:',
             '\n      Entry: Hello World',
             '\n      substring.lower: ', resuExa1 );

    /* Ejemplo 2: */
        let arrTo = ['1', '2', '3', '4', '5', '6']
        let arrMetoEnca = arrTo
                            .map(parseFloat)
                            .filter(x => x % 2 === 0)
                            .reduce((x, y) => x + y); // 12
        
        show('\n  #4.2-Example:',
             '\n      Entry', arrTo,
             '\n      map.filter.reduce:', arrMetoEnca, '\n')