const show = console.log
const R = require('ramda')
const { Tuple } = require('./08-aridadAndTuplas').aridNTupl

/*** Curry: 
 *      técnica que convierte funciones multiparámetro en una secuencia de funciones unarias.
 *   Ayuda a: 
 *      Emular funciones factoría.
 *      Implementar funciones plantilla.
 ***/

/* Simulacion del Curri con Clousures */
function curryExamp1(fn) {
    return function (firstParam) {
        return function (secondParam) {
            return fn(firstParam, secondParam);
        }
    }
}

/* Simplificación */
const curry2 = fn => firstParam => secondParam => fn(firstParam, secondParam)

/* Use */
const fullName = curry2( (name, lastname) =>  [name, lastname] )

/* Use with Tuple */
const StringPair = Tuple(String, String);
    const fullNameTupl = curry2( (last, first) => new StringPair(last, first) )
        const [first, last] = fullNameTupl('Curry')('Haskell').values()
            show(
                '\n#1-Simulacion del Curri con Clousures: ',
                '\n  #1.1-fullName(Curry)(Haskell): ', fullName('Curry')('Haskell'), //-> [ 'Curry', 'Haskell' ]
                '\n  #1.2-fullNameTupl:',
                '\n      (Curry)(Haskell): ', fullNameTupl('Curry')('Haskell'), //-> _T { _1: 'Curry', _2: 'Haskell' }
                '\n      (Curry): ', fullNameTupl('Curry'), //-> [Function (anonymous)]
                '\n      first: ',   first, //-> 'Curry'
                '\n      last: ',    last, //-> 'Haskell'
                '\n      (Curry)(Haskell).values(): ', fullNameTupl('Curry')('Haskell').values() ) //-> ['Curry', 'Haskell']

/*** Emular funciones factoría (interfaces): crean un comportamineto para ciertas clases. ***/

/* C#
    interface IStudentStore { Student findStudent(String ssn) }

    public class findStudentFromCache : IStudentStore {
        public Student findStudent(String ssn) { return db.find(ssn) }
    }

    public class findStudentFromDb : IStudentStore {
        public Student findStudent(String ssn) { return cache.find(ssn) }
    }

    IStudentStore store = hasCache ? new findStudentFromDb() : new findStudentFromCache();
    Student student = store.findStudent("444-444-444");
*/

/* Ramda para currificar */

const
    findStudentFromDb = user => R.contains(user, ['Angel', 'Lolo']),
    findStudentFromArray = user => R.contains(user, ['Rogelio']),
    findStudent = R.curry( (user, useDB) => useDB ? findStudentFromDb(user) : findStudentFromArray(user) )

    show( 
        '\n#2-Emular funciones factoría: ',
        '\n  #2.1-fullNameTupl:',
        '\n      (\'444-444-444\')(true): ', findStudent('444-444-444')(true),
        '\n      (\'Angel\')(true): ', findStudent('Angel')(true),
        '\n      (\'444-444-444\')(false): ', findStudent('444-444-444')(false),
        '\n      (\'Angel\')(false): ', findStudent('Angel')(false)
    )


/***** Implementar funciones plantilla: 
 *          Funciona para centralizar las configuraciones de una libreria.
 * ***/

show('\n#3-Implementar funciones plantilla:',
     '\n#3.1-MyLog:')
    /* MyLog */
        const fs = require('fs')
        const MyLog = curry2( (appender, value) => {
            const appenders = {
                file: (layotut, val)  => {
                    var f = new Date();
                    let date = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()
                    if ( fs.existsSync('Logger.txt') ) {
                        fs.appendFileSync('Logger.txt', '\n' +date + ' - ' + val, 'Latin1' )
                    } else {
                        fs.appendFileSync('Logger.txt', layotut + date+ ' - ' + val, 'Latin1' )
                    }
                    return 'Resporte: Logger.txt'
                },
                log: function (layotut, val) { 
                    var f = new Date();
                    let date = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()
                    console.log(date + ' - ' + layotut + val) 
                },
            };
            
            const layouts = {
                rep: '----------------------------------------------------\n' +
                    '                  Reporte                           \n' +
                    '----------------------------------------------------\n',
                line: 'Logger: ',
            };

            function MyLogger() {
                var _layotut = null
                var _appender = null
                var _value = null
                const getLayout = () => _layotut
                const getAppender = () => _appender
                const getValue = () => _value
                return {
                    setValue: function (value) { _value = value },
                    getLayouts: () => Object.keys(layouts),
                    setLayout: function (layotut) { _layotut = layotut },
                    getAppenders: () => Object.keys(appenders),
                    setAppender: function (appender) { _appender = appender},
                    exe: () => {
                        let fn = getAppender()
                        return fn(getLayout(), getValue() )
                    }
                }
            }

            const log = new MyLogger()
            log.setAppender(appenders[appender])
            log.setValue(value)
            if ( appender == 'log') {
                log.setLayout(layouts['line']);
            }
            else if ( appender == 'file') {
                log.setLayout(layouts['rep']);
            } else {
                return null
            }
            
            return log.exe()
        });
            MyLog('log')('varLolito')
            MyLog('log')('Lol')
            MyLog('log')('Daft')
            MyLog('log')('Troll')

            MyLog('file')('varLolito')
            MyLog('file')('Lol')
            MyLog('file')('Daft')
            MyLog('file')('Troll')

    show('\n#3.2-:')
    /* Para un ejemplo mas avanzado tenemos la libreria "log4js", tiene una estructura de plantilla
       y se observa su configuración */

        const log4js = require('log4js') //-> Doble Click oara ver la estructura

            log4js.configure({
                appenders: { 'out': { type: 'stdout', layout: { type: 'basic' } } },
                categories: { default: { appenders: ['out'], level: 'info' } } 
            });
                const logger = log4js.getLogger('Aplicación');
                    show('\n#3.2.1: ')
                    logger.error('Error de conexión a la base de datos!'); //-> [2020-03-06T10:20:01.634] [ERROR] Aplicación - Error de conexión a la base de datos!

            log4js.configure({
                appenders: { out: { type: 'stdout', layout: { type: 'messagePassThrough' } } },
                categories: { default: { appenders: [ 'out' ], level: 'info' } }
            });
                const logger2 = log4js.getLogger('LolDaft');
                    const varName = 'varNameValue';
                        show('\n#3.2.2: ')
                        logger2.error('Error en la variable "varName": ', varName); //-> Error en la variable "varName":  varNameValue

            log4js.configure({
                appenders: {
                out: { type: 'stdout', layout: {
                    type: 'pattern',
                    pattern: '%d %p %c %X{user} %m%n'
                }}
                },
                categories: { default: { appenders: ['out'], level: 'info' } }
            });
                const logger3 = log4js.getLogger();
                    logger3.addContext('user', 'charlie');
                    show('\n#3.2.3: ')
                    logger3.info('doing something.');


            log4js.addLayout('json', function(config) {
                return function(logEvent) { return JSON.stringify(logEvent) + config.separator; }
            });
            
            log4js.configure({
                appenders: {
                out: { type: 'stdout', layout: { type: 'json', separator: ',' } }
                },
                categories: {
                default: { appenders: ['out'], level: 'info' }
                }
            });
                const logger4 = log4js.getLogger('json-test');
                    show('\n#3.2.5.1: ')
                    logger4.info('this is just a test');
                    show('\n#3.2.5.2: ')
                    logger4.error('of a custom appender');
                    show('\n#3.2.5.3: ')
                    logger4.warn('that outputs json');