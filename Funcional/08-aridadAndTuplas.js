const show = console.log
const R = require('ramda')

/*** 
 * Con métodos concatenados estamos obligados a usar las funciones del propio objeto. 
 * Solución:
 *    Tuberias: funciones desacopladas que se pueden ejecutar secuencialmente. 
 * 
 * Compatibilidad de tipos: 
 *      Los tipos de salida se relacionan con los tipos de los parámetros de entrada de otra. 
 * 
 * Aridad: número de parámetros de entrada. Longitud.
 *         Recomendación: 
 *              Hacer funciones de un parámetro (unarias) o en caso de varios 
 *              debido a que se compleja y pierde versatilidad. 
 *              Mejor usar una función que devuelva una tupla, asi sería unaria.
 * 
 * Tupla: listado finito y ordenado de valores (a, b, c). 
 *        Paquete de valores inmutables, con relación que devolve varios valores.
 * Simulación: JSON o objetos array ( no recomendable ).
 * Tuplas ventajas:
 *     Son inmutables.
 *     Evita crear nuevos tipos. crear clases para un único uso es poco viable.
 *     Evita crear arrays heterogéneos: Involucra muchas validaciones 
 *          Recomendaciones: Usar Arrays solo con colecciones de objetos con el mismo tipo.
 ***/
module.exports.aridNTupl = (function () {
   const _trim = (str) => str.replace(/^\s*|$/g, '');

   const _normalize = (str) => str.replace(/\-/g, '');

   const _checkType = function(typeDef, actualType) {
      if(R.is(typeDef, actualType)) {
         return actualType;
      }
      else {
         throw new TypeError('Type mismatch. Expected [' + typeDef + '] but found [' + typeof actualType + ']');
      }
   }

   const _Tuple = function( /* types */ ) {
      const typeInfo = Array.prototype.slice.call(arguments, 0);
      const _T =  function( /* values */ ) {
         const values = Array.prototype.slice.call(arguments, 0);
         if(values.some( val => val === null || val === undefined) ) {
            throw new ReferenceError('Tuples may not have any null values');
         }
         if(values.length !== typeInfo.length) {
            throw new TypeError('Tuple arity does not match its prototype');
         }
         values.map(function(val, index) {
               this['_' + (index + 1)] = checkType(typeInfo[index], val); 
               }, this);
         Object.freeze(this);
      };
      _T.prototype.values = function() {
            return Object.keys(this).map(function(k) {
               return this[k];
            }, this);
      };
      return _T;
   }

   function trim      (str)       { return _trim(str) }
   function normalize (str)       { return _normalize(str) }
   function checkType (type, val)       { return _checkType(type, val) }
   function Tuple (...args) { return _Tuple(...args) }

   return {
      trim,
      normalize,
      checkType,
      Tuple
   }
})();

/* Usage */
const normalize = this.aridNTupl.normalize,
      trim = this.aridNTupl.trim,
      checkType = this.aridNTupl.checkType,
      Tuple = this.aridNTupl.Tuple

// show('\n#1-Tuberias: ',
//    '\n    trim.normalize: ', normalize( trim('444-444-444      ') ), //-> 444444444
//    '\n    normalize.trim: ', trim( normalize('  444-444-444') ) ) // 444444444

// show('\n#1.2-checkType: ',
//      '\n    ( String, \'Curry\' )  : ', checkType(String, 'Curry'),  //-> String
//      '\n    ( String, \'Curry\' )  : ', checkType(Number, 3),        //-> Number
//      '\n    ( Date, new Date() ) : ',  checkType(Date, new Date()), //-> Date
//      '\n    ( Object, {} )       : ',        checkType(Object, {}),       //-> Object
//      '\n    (String)(42)         :  //-> Throws TypeError ')                 //-> Throws TypeError 

const Status = Tuple(Number, String);
   const status = new Status(401, 'No Authorize');
      const [code, message] = status.values();
         // show( '\n#2-Tuplas',
         //       '\n  Example 1: ',
         //       '\n      Status: ', Status, /* //-> [Function: _T]: 
         //                                     'Cause it waiting the values to return in obj */
         //       '\n      status: ', status, //-> _T { _1: 401, _2: 'No Authorize' }
         //       '\n      [code, message]: ', [code, message], //-> [ 401, 'No Authorize' ]
         //       '\n      code: ', code, //-> 401
         //       '\n      message: ', message) //-> No Authorize

const Status2 = Tuple(Number, String, Boolean);
   const status2 = new Status2(700, 'Authorize', true);
      const [code2, message2, bandera] = status2.values();
         // show('\n  Example 2: ',
         //      '\n      [code2, message2, bandera]: ', 
         //      [code2, message2, bandera]) //-> [ 401, 'No Authorize' ]

const Status3 = Tuple(Boolean, String);

const isValid = function (str) {
    if(str.length === 0){
       return new Status3(false,
            'Invald input. Expected non-empty value!');
    }
    else {
       return new Status3(true, 'Success!');
    }
}

let result = isValid( normalize( trim('444-44-4444') ) ); //-> (true, 'Success!')
   const [bandera3, message3] = result.values();
      // show('\n  Example 3: ',
      //    '\n      result: ', result,
      //    '\n      [bandera3, message3]: ', [bandera3, message3]) //-> [ 401, 'No Authorize' ]
