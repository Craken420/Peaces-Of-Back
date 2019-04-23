
/*** Componer con RamdaJS */
const R = require('ramda')

/*
  Obtener el partido ganador de las elecciones por medio sus resultados porcentuales.
*/

const parties = ['PSOE', 'Cs'];
const percent = [22.66, 13.05];

/*
Compose:

Estructura: FIFO (first in, first out), el primero en entrar es el primero en salir.
Crear: se crea la cola vacía.
Encolar (añadir, entrar, push): se añade un elemento a la cola. Se añade al final de esta.
Desencolar (sacar, salir, pop): se elimina el elemento frontal de la cola, es decir, el primer elemento que entró.
Frente (consultar, front): se devuelve el elemento frontal de la cola, es decir, el primero elemento que entró.
*/
const getPartyWinner = R.compose(
    // Get first value.//=> In: [ 'PSOE', 'Cs' ] Out: PSOE
    R.head,
    // Get the indecate index.//=> In: [ [ 'PSOE', 22.66 ], [ 'Cs', 13.05 ] ] Out: [ 'PSOE', 'Cs' ]
    R.pluck(0),
    // Reverse array values.//=> In: [ [ 'Cs', 13.05 ], [ 'PSOE', 22.66 ] ] Out: [ [ 'PSOE', 22.66 ], [ 'Cs', 13.05 ] ]
    R.reverse,
    // Order by indicate value.//=> In: [[ 'PSOE', 22.66 ],[ 'Cs', 13.05 ]] Out: [ [ 'Cs', 13.05 ], [ 'PSOE', 22.66 ] ]
    R.sortBy(R.prop(1)),
    // Merge two arrays.//=> In: ['PSOE', 'Cs'] [22.66, 13.05]; Out: [[ 'PSOE', 22.66 ],[ 'Cs', 13.05 ]]
    R.zip
);

const partyWinner = getPartyWinner(parties, percent); // 'PP'

console.log(partyWinner)

/* 
Pipe:
Estructura: Pila. LIFO (last in, first out), el último que entra es el primero en salir.
Crear (constructor): crea la pila vacía.
Tamaño (size): regresa el número de elementos de la pila.
Apilar (push): añade un elemento a la pila.
Desapilar (pop): lee y retira el elemento superior de la pila.
Leer último (top o peek): lee el elemento superior de la pila sin retirarlo.
Vacía (empty): devuelve cierto si la pila está sin elementos o falso en caso de que contenga alguno.
*/
const getPartyWinner = R.pipe(
    R.zip,
    R.sortBy(R.prop(1)),
    R.reverse,
    R.pluck(0),
    R.head
);