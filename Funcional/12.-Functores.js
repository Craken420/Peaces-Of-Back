const R = require('ramda')
const RF = require('ramda-fantasy')

const Show = console.log

//#region Gestión de errores

  /* Imperativos.
     Ejem: Try Catch se basa en el código que no le tienes fe
  */
  function myFunction() { try { /* código a ejecutar */ } catch (err) { /* gestión del error */ } }

  /* Check-Null: Cuando una función no funciona correctamente es mejor devolver ‘null’
     No es la mas viable
  */
  function getCountry(client) {
    let job = client.getJob();
    if (job !== null) {
      let address = job.getAddress();
      if (address !== null) 
        return address.getCountry();
      return null;
    }
    return null;
  }
//#endregion Gestión de errores

/*
  Problematica:
    ‘try-catch’ como estructura no nos sirve.

  Solucion:
    Estructura de datos como clase envoltorio que hospeda a nuestro estado u objeto. 
    Controlando las ejecuciones de datos.   
*/

//#region Container / Envoltorio / Wraper
  class Wrapper { // Contenedor 2
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

  MyContainer = x => new Wrapper(x)

  const MyCont1 = MyContainer(10) 
    // Show('\"MyContainer.of(10)\": \n\t', MyCont1) // MyContainer { "value": 10 }
  const MyCont2 = MyContainer('Hello World') 
    // Show('\"MyContainer.of(\'Hello World\')\": \n\t', MyCont2) // MyContainer { "value": "Hello World" } 
  const MyCont3 = MyContainer([ 1, 2, 3 ])  
    // Show('\"MyContainer.of([ 1, 2, 3 ])\": \n\t', MyCont3) // MyContainer { "value": [1, 2, 3] }
  const MyCont4 = MyContainer({ a: 1, b: 2, c: 3 })  
    // Show('\"MyContainer.of({ a: 1, b: 2, c: 3 })\": \n\t', MyCont4) // MyContainer { "value": { "a": 1, "b": 2, "c": 3 }
  const MyCont5 = MyContainer( MyContainer('two deep level') ) 
    // Show('\"MyContainer.of( MyContainer.of(\'two deep level\') )\": \n\t', MyCont5) // MyContainer { "value": { "value": "two deep level" } }

//#endregion Contenedores

//#region Functores

    /* 1°ra ley: uso de identity, Devuelve el valor que se le pasa.*/
      const identity = x => x

    /* Hacer identity directamente sobre el contenedor */
      const array = [ 1, 2, 3, 4, 5 ]
      let myFunctor1 = arr => arr.map(identity) // [ 1, 2, 3, 4, 5 ]
        // Show( '\"myFunctor1(array)\": \n\t', myFunctor1(array) )

    /* Equivale */
      let myFunctor2 = arr => identity(arr) // [ 1, 2, 3, 4, 5 ]
        Show( '\"myFunctor2(array)\": \n\t', myFunctor2(array) )

    /* Use Wrapper Ramda : Contenedor 2 */
      let strWrp = MyContainer('Holo')
      
      Show('\"R.map(R.toUpper, stringWrapper )\": \n\t', 
        R.map( R.pipe(R.identity, R.toUpper), strWrp ) ); // HELLO WORLD

    /* 
      Implementación del contenedor: 
        ‘Map’ despues de ejecutar, el parametro regresa como nuevo valor
        Ejem: Como comprar un gato (valor) resguardarlo en nuestra casa (envoltorio) 
        y llega alguien (función que ejecuta el ‘map’) y se lo llevé en su primera visita.
      
      Solución: 
    */
      Wrapper.prototype.map = function(fn) {
        return new Wrapper( fn(this.value) )
      }
      
      // const numberWrap1 = MyContainer2([2,3]);
      // const sum10 = num => num + 10;
      
      // Show('sum10(numberWrap1): \n\t', numberWrap1.map(sum10) ); // return Wrapper(17)
  
      // Show('numberWrap.fmap( R.compose(sum5, sum5, sum5) ): \n\t', 
      //   numberWrap1.fmap( R.compose(sum10, sum10, sum10) ) ); // return Wrapper(17)
  
      // const valCont = val => MyContainer.of(val)
      //   Show('\"MyContainer.of(val)\": \n\t', valCont(10))

      // const myFunctor2Ley1 = val => valCont(val).fmap(identity) // { "value": 10 }
      //   Show('\"identity(valCont(val))\": \n\t', myFunctor2Ley1(10) )

    /* 2°da ley:
      Al ejecutar compose con dos argumentos, se les aplica la función a cada uno de ellos 
      const myFunctMapCompFG = myFunctor.map( compose(f, g) )
      const equiv = myFunctor.map(g).map(f)
    */
      function compose() {
        const args = arguments;
        const start = args.length - 1;
        return function () {
          let i = start;
          let result = args[start].apply(this, arguments);

          while (i--) {

              result = args[i].call(this, result);
          }
          return result;
        }
      }

      const mapArray2 = [ 1, 2, 3 ]
      // Show('\"mapArray2.map( compose( concat(\'a\', add(10) ) ) )\": \n\t',
      //   mapArray2.map( compose( R.add(10), R.add(5) ) ) )  // [ "a11", "a12", "a13" ]

      // Show('\"mapArray2.map( add(10) ).map( concat(\'a\') )\": \n\t',
      //   mapArray2.map( R.add(10) ).map(  R.add(5) ) ) // [ "a11", "a12", "a13" ]

      /* Y ahora con nuestro contenedor. */
        // const c = MyContainer.of([1,2])
          // Show('\"c\": \n\t',  c) // { "value": "a11" }
      
      
        // Show('compose: ', c.map( R.add(5) ) )
        // Show('\" c.map( compose( R.add(10), add(10) ) )\": \n\t',  
        //   c.map( R.add(5) ).map( R.add(10) ) )   // { "value": "a11" }
        // Show('\" c.map( add(10) ).map( R.add(10) ) \": \n\t',  
        //   c.map( R.add(10) ).map( R.add(10) ) ) // { "value": "a11" }

      /* Use Wrapper Ramda : Contenedor 2 */
        // Show( '\"R.map( R.compose( R.concat(\'a\'), R.add(10) ) ,stringWrapper )\": \n\t', 
        //   R.map( R.compose( R.concat('a'), R.add(10) ) ,stringWrapper ) ) ; // HELLO WORLD
    
      /* Use Wrapper Ramda : Contenedor 2 */
        // const numberWrap = MyContainer2(2);
        // const sum5 = num => num + 5;
        // Show('numberWrap.fmap(R.add(9) ): \n\t', numberWrap.fmap(sum5 ) ); // return Wrapper(7)

        // Show('numberWrap.fmap(sum5).fmap(sum5).fmap(sum5): \n\t', 
        //   numberWrap.fmap(sum5).fmap(sum5).fmap(sum5) ); // return Wrapper(17)

        // Show('numberWrap.fmap( R.compose(sum5, sum5, sum5) ): \n\t', 
        //   numberWrap.fmap( R.compose(sum5, sum5, sum5) ) ); // return Wrapper(17)
  
      
    /* Final Example */
      const add1 = (a) => a + 1;
      // class MyFunctor { //Custom "Functor"
      //   constructor(value) {
      //     this.val = value;
      //   }
      //   map(fn) {   //Applies function to this.val + returns new Myfunctor
      //     return new Myfunctor(fn(this.val));
      //   }
      // }

      // //temp is a Functor instance that's storing value 1
      //   let temp = new MyFunctor(1); 
      
      // /* Ejecutamos */
      //   Show('temp.map(add1): \n\t', temp.map(add1)); //-> temp allows us to map "add1"

    /*
      Cumpliendo reglas funcionales – encadenar, combinar y componer.
      Teniendo sistemas tolerantes a fallos. 
    */
//#endregion Functores


  /* Equivalent as */
  const MyContainer2 = val => new Wrapper(val);
  const stringWrapper = MyContainer2('Hello World');
          // Show( '\"MyContainer2(\'Hello World\')\": \n\t', stringWrapper )






