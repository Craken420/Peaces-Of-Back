/*** Tuberias ***/

/*
Haskell

curry(f) :: (a, b, c) -> f(a) -> f(b) -> f(c)

*/

/*** Simulacion del Curri con Clousures */
function curry2(fn) {
    return function (firstParam) {
        return function (secondParam) {
            return fn(firstParam, secondParam);
        }
    }
}

const fullNameCurry = curry2( (name, lastname) => {
    return [name, lastname];
});

//Simplificación
const curry2 = fn => firstParam => secondParam => fn(firstParam, secondParam)
const fullNameCurry = curry2( (name, lastname) => [name, lastname] )

//Uso
const [name,lastname] = fullNameCurry('Jhon')('Doe');

console.log(fullNameCurry('Jhon')('Doe')) // ['Jhon', 'Doe']
console.log([name,lastname]) // ['Jhon', 'Doe']
console.log(typeof(name),lastname) // string Doe
console.log(fullNameCurry('Jhon')) // Function


/***** Emular funciones factoría *****/

/*
  C#, interfaz:

    interface IStudentStore {
        Student findStudent(String ssn);
    }

    Ahora podríamos tener dos clases que implementan esta interfaz. 
    Cada clase se encargaría de obtener los estudiantes de fuentes de datos diferentes, 
    pero para el programa, sería siendo lo mismo, 
    el programa lo que necesita es obtener el estudiante. 
    Esto es lo que se conoce como patrón método factoría. 
    
    La implementación sería:

    public class DBStoreStudent : IStudentStore {
        public Student findStudent(String ssn) {
            // No se muestra la instanciación de db. 
            // Se evita por simplificar
            return db.find(ssn);
        }
    }

    public class CacheStoreStudent : IStudentStore {
        public Student findStudent(String ssn) {
            // No se muestra la instanciación de caché. 
            // Se evita por simplificar
            return cache.find(ssn);
        }
    }

    Si ahora quisiéramos hacer uso de ello dependiendo de si tengo la caché activa o no:

    IStudentStore store = hasCache ? new CacheStoreStudent() : new DBStoreStudent();
    Student student = store.findStudent("444-444-444");
*/

/* Rambda para currificar */
// findStudentFromDb :: DB -> (String -> Student)
const findStudentFromDb = R.curry( (db, ssn) => {
    return find(db, ssn);
});

// findStudentFromArray :: Array -> (String -> Student)
const findStudentFromArray = R.curry( (array, ssn) => {
    return array[ssn];
});

const findStudent = useDB ? findStudentFromDb(db) : findStudentFromArray(array)
const student = findStudent('444-444-444');



/* Curry */
const divide = R.curry((num, den) => num/den);
// will cause problems
divide()(3) // NaN
divide(R.__)(3) // function
divide(R.__)(3)(21) // 7


foo(1, 2, 3);
//Can be called with each argument in steps:

foo(1)(2)(3);
// which means
var curried = foo(1);
var alsoCurried = curried(2);
var finallyEvaluated = alsoCurried(3);




/***** Implementar funciones plantilla *****/

/*** Funciona para centralizar las configuraciones de una libreria ***/
const logger = R.curry2(function (appender, layout, name, level, message) {
    const appenders = {
         alert: new Log4js.JSAlertAppender(),
         console: new Log4js.BrowserConsoleAppender()
    };
    const layouts = {
         basic: new Log4js.BasicLayout(),
         json: new Log4js.JSONLayout(),
         xml: new Log4js.XMLLayout()
    };
    const appender = appenders[appender];
    appender.setLayout(layouts[layout]);
    const logger = new Log4js.getLogger(name);
    logger.addAppender(appender);
    logger.log(level, message, null);
});