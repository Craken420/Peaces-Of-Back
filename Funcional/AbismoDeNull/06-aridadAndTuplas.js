/*** Tuberias ***/

/*
Haskell

f :: a -> b
g :: b -> c

g(f(a)); // donde se devuelve C

*/

// trim :: String -> String
const trim = (str) => str.replace(/^\s*|$/g, '');

// normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

console.log(normalize(trim('444-444-444      '))) // 444444444
console.log(trim(normalize('  444-444-444'))) // 444444444


/*** La aridad y las tuplas ***/

//JavaScript: no existe nada que dé soporte a las tuplas
const Tuple = function () {
    const typeInfo = Array.prototype.slice.call(arguments, 0);
    const _T = function () {
        const values = Array.prototype.slice.call(arguments, 0);
        
        if (values.some((val) => val === null || val === undefined)) {
             throw new ReferenceError('Tuples may not have any null values');
        }   

        if (values.length !== typeInfo.length) {
            throw new TypeErro('Tuple arity does not match its prototype');
        }

        values.map(function (val, index) {
            this['_' + (index + 1)] = checkType(typeInfo[index])(val);
        }, this);

        Object.freeze(this); 
    };

    _T.prototype.values = function () {
        return Object.keys(this).map(function (k) {
            return this[k];
        })
    }
    return _T;
}

const Status = Tuple(Number, String);
const status = new Status(401, 'No Authorize');

const [code, message] = status.values();

/*** 
 * Typescript
 *
    let status: [number, string]; 
    status = [401, 'Not authorize']; // OK 
    status = ['Not authorize', 401]; // Error
 ***/