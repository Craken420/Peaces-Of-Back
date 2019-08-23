// Tipos:

/* 
    Identidad (I-Combinator)

    Dada una función devuelve la misma función
    identity :: (a) -> a

    Ayuda a envolver una función

*/

const identity = function (fn) {
    return fn;
}

/* 
    Útil para depurar funciones, saber la entrada y salida de una función
*/

const identity = function (fn) {
    return function (...args) {
        return fn.apply(this, args);
    };
}

const identity = function (fn, logger) {
    return function (...args) {
        logger(args);
        const result = fn.apply(this, args);
        logger(result);
        return result;
    }
};

const exp = function (num) {
    return num * num;
};

const expLog = identity(exp, console.log);

expLog(3)

/* 
    Tap (K-Combinator)

    Dada una función devuelve la misma función
    identity :: (a) -> a
*/

const debug = R.tap(console.log);
const getPartyWinner = R.pipe(
    R.zip,
    debug,
    R.sortBy(R.prop(1)),
    debug,
    R.reverse,
    debug,
    R.pluck(0),
    debug,
    R.head
);

/* 
    Alternancia (OR-Combinator)

    Toma dos funciones y devuelve el valor de la primera 
    si el resultado ofrecido no es false, null o undefined. 
    Si no es así, devuelve el valor de la segunda.
*/
const alt = function (fn1, fn2) {
    return function (val) {
        return fn1(val) || fn2(val);
    }
}

const alt = R.curry((fn1, fn2, val)  => fn1(val) || fn2(val));

var client = findClient('444-444-444');
if (!client) {
   client = createClient('444-444-444');
}

append("#client-info', client");

/*
    Secuencia (S-Combinator)

    El combinador toma funciones como parámetro y
    devuelve una nueva función que ejecuta todas estas de forma secuencial.
    La secuencia se ejecuta contra el mismo valor.
    El combinador ‘seq’ no devuelve un valor al terminar su ejecución.
    Si quisiéramos que devolviese el valor sobre el que se itera la secuencia,
    podemos combinarlo con el combinador tap que hemos visto anteriormente.
*/
const seq = function () {
    const funcs = Array.prototype.slice.call(arguments);
    return function (val) {
        funcs.forEach(function (fn) {
            fn(val)
        });
    }
}

const showClient = R.pipe(
    findClient,
    seq(
         append('#client-info'),
         console.log
    )
)

showClient('444-444-444');

/*
    Bifurcación-Unión (FJ-Combinator)
    El combinador bifurcación (o Fork) nos viene muy bien cuando tenemos casos donde necesitamos procesar un simple recurso en dos diferentes formas y necesitamos combinar los resultados. Este combinador acepta tres funciones: 2 funciones que procesan el recurso y la función de enlazado o cálculo final.
    Útil para casos matemáticos
*/

const fork = function(fnJoin, fn1, fn2) {
    return function(val) {
        return fnJoin(fn1(val), fn2(val));
    }
}

const getAvarage = fork(R.divide, R.sum, R.length);
getAvarage([5, 7, 10]);