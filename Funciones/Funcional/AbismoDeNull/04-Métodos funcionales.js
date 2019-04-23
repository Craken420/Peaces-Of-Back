/*** Los métodos funcionales ***/

/* control de flujo en una aplicación */

/* Programación imperativa */
var loop = optC();
while (loop) {
    var condition = optA();
    if (condition) {
       optB1();
    } else {
       optB2();
    }
    loop = optC();
}
optD();

/* Estilo funcional */
optA().optB().optC().optD();

/* Métodos encadenados */
console.log('Hello World.FRM'.substring(-4).toLowerCase())

//-------------------------------------------------------------

/* Funciones encadenadas */
const array = [1, 2, 3, 4, 5, 6];
const arrayFinal = [array.length];

for (let i = 0; i < array.length; i++) {
    arrayFinal[i] = (array[i] % 2 === 0) ? array[i] * 2 : array[i];
}

console.log(arrayFinal); // [1, 4, 3, 8, 5, 12]


//La misma operacion pero ahora multiplicando por tres
const array = [1, 2, 3, 4, 5, 6];
const arrayFinal = [array.length];

for (let i = 0; i < array.length; i++) {
    arrayFinal[i] = (array[i] % 2 === 1) ? array[i] * 3 : array[i];
}

console.log(arrayFinal); // [4, 2, 6, 4, 8, 6]

//-------------------------------------------------------------

function loop(array, func)  {
    const arrayFinal = [array.length];

    for (let i = 0; i < array.length; i++) {
        arrayFinal[i] = func(array[i]);
    }

    return arrayFinal;
}

const array = [1, 2, 3, 4, 5, 6];
const arrayFinal2 = loop(array, element => (element % 2 === 0) ? element * 2 : element);
const arrayFinal3 = loop(array, element => (element % 2 === 1) ? element * 3 : element);

console.log(arrayFinal2); // [1, 4, 3, 8, 5, 12]
console.log(arrayFinal3); // [3, 2, 9, 4, 15, 6]

//-------------------------------------------------------------

const array = [1, 2, 3, 4, 5, 6];
const getExpression = function (rest, multiplier) {
    return (element => element % 2 === rest ? element * multiplier : element);
};
const arrayFinal2 = loop(array, getExpression(0, 2));
const arrayFinal3 = loop(array, getExpression(1, 3));

console.log(arrayFinal2); // [1, 4, 3, 8, 5, 12]
console.log(arrayFinal3); // [3, 2, 9, 4, 15, 6]