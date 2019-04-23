/*** Composición funcional ***/

/*
Haskell:

función f transforma:
entrada: A
salida: B
función g transforma:
entrada: B
salida :C
con esto se puede obtener una tercera función
por la composición de f y g,
transforma
entrada: A
salida: C

Esto de manera formal se anota de esta manera:

f · g = f(g) = compose :: (B -> C) -> (A -> B) -> (A -> C)

Donde f · g se lee como ‘f compuesto de g’

Respetar la transparencia referencial
*/

const text = `En un lugar de la Mancha, de cuyo nombre no quiero 
acordarme, no ha mucho tiempo que vivía un hidalgo de 
los de lanza en astillero, adarga antigua, rocín flaco y 
galgo corredor. Una olla de algo más vaca que carnero, 
salpicón las más noches, duelos y quebrantos los sábados, 
lentejas los viernes, algún palomino de añadidura los domingos, 
consumían las tres partes de su hacienda.`;

// explode :: string -> array
const explode = txt => txt.split(' ');

// count :: array -> number
const count = arr => arr.length;

// count(explode(text));

// countWords :: string -> number
// const countWords = compose(count, explode);

// countWords(text);


/** Simulacion de las composiciones en JS */

function compose() {
    
       const args = arguments;
       const start = args.length - 1;
    //    console.log('----------------------------------------')
    //    console.log('arguments: ',arguments)
    //    console.log('args: ',args)
    //    console.log('start: ',start)

       return function () {

           let i = start;
           let result = args[start].apply(this, arguments);

        //    console.log('i antes del while: ',i)
        //    console.log('result antes del while: ',result)

           while (i--) {

                result = args[i].call(this, result);
                // console.log('Op: args[i].call(this), result: ',args[i].call(this, result))
                // console.log('i en el while: ',i)
                // console.log('result en el while: ',result)
          }

        // console.log('result antes de retornar: ',result)
        return result;
    }
}

const countWords = compose(count, explode);

countWords(text)
// console.log('countWords: ',countWords(text))

// countWords :: string -> number
const countWords = R.compose(count, explode);

countWords(text);

/*** Métodos encadenados con RamdaJS ***/

Function.prototype.compose = R.compose;

const countWords = count.compose(explode);
