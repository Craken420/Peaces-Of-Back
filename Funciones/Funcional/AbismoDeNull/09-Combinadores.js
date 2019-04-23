// Tipos:

/* 
    Identidad (I-Combinator)

    Dada una función devuelve la misma función
    identity :: (a) -> a

    Ayuda a envolver una función

    const identity = function (fn) {
        return fn;
    }
*/



/* 
    Útil para depurar funciones, saber la entrada y salida de una función

    const identity = function (fn) {
        return function (...args) {
            return fn.apply(this, args);
        };
    }
*/

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
    Identidad (I-Combinator)

    Dada una función devuelve la misma función
    identity :: (a) -> a
*/