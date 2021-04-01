const R = require('ramda')

/**** Parse ****/

/* pair*/
R.pair('foo', 'bar'); //=> ['foo', 'bar']

/* fromPairs */ //Array to obj
R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}



/**** RECORRER ****/

/* forEach */
const printXPlusFive = x => console.log(x + 5);
R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
    // logs 6
    // logs 7
    // logs 8



/**** COMPARE ****/

/* difference */
R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]

/* differenceWith */
const cmp = (x, y) => x.a === y.a;
const l1 = [{a: 1}, {a: 2}, {a: 3}];
const l2 = [{a: 3}, {a: 4}];
R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]

/* comparator */
const byAge = R.comparator((a, b) => a.age < b.age);
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByIncreasingAge = R.sort(byAge, people);
   //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]



/**** GET ****/

/* pluck */
var getAges = R.pluck('age');
getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}

/* length */
R.length([]); //=> 0
R.length([1, 2, 3]); //=> 3

/* head */
R.head(['fi', 'fo', 'fum']); //=> 'fi'
R.head([]); //=> undefined
R.head('abc'); //=> 'a'
R.head(''); //=> ''

/* nth */
const list = ['foo', 'bar', 'baz', 'quux'];
R.nth(1, list); //=> 'bar'
R.nth(-1, list); //=> 'quux'
R.nth(-99, list); //=> undefined
R.nth(2, 'abc'); //=> 'c'
R.nth(3, 'abc'); //=> ''

/* find */
const xs = [{a: 1}, {a: 2}, {a: 3}];
R.find(R.propEq('a', 2))(xs); //=> {a: 2}
R.find(R.propEq('a', 4))(xs); //=> undefined

/* findLast */
const xs = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
R.findLast(R.propEq('a', 4))(xs); //=> undefined

/* findIndex */
const xs = [{a: 1}, {a: 2}, {a: 3}];
R.findIndex(R.propEq('a', 2))(xs); //=> 1
R.findIndex(R.propEq('a', 4))(xs); //=> -1

/* findLastIndex */
const xs = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
R.findLastIndex(R.propEq('a', 4))(xs); //=> -1

/* indexBy */
const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
R.indexBy(R.prop('id'), list);
//=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}

/* indexOf */
R.indexOf(3, [1,2,3,4]); //=> 2
R.indexOf(10, [1,2,3,4]); //=> -1

/* lastIndexOf */
R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
R.lastIndexOf(10, [1,2,3,4]); //=> -1

/* range */
R.range(1, 5);    //=> [1, 2, 3, 4]
R.range(50, 53);  //=> [50, 51, 52]



/**** ADD ****/

/* take */
R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']

/* takeLast */
R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.takeLast(3, 'ramda');               //=> 'mda'

/* takeLastWhile */
const isNotOne = x => x !== 1;
R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'

/* takeWhile */
R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'

/* addindex */
const mapIndexed = R.addIndex(R.map);
mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
    //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']

/* prepend */
R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']

/* Append */
R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
R.append('tests', []); //=> ['tests']
R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]

/* insert */
R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]

/* insertAll */
R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]

/* intersperse */
R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']



/**** EDIT ****/

/* sort */
const diff = function(a, b) { return a - b; };
R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]

/* filter */
const isEven = n => n % 2 === 0;
R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}

/* without */
R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]

/* reject */
const isOdd = (n) => n % 2 === 1;
R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}

/* partition */
R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);
    // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
    // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]

/* map */
const double = x => x * 2;
R.map(double, [1, 2, 3]); //=> [2, 4, 6]
R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}

/* mapAccum */
const digits = ['1', '2', '3', '4'];
const appender = (a, b) => [a + b, a + b];
R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]

/* mapAccumRight */
const digits = ['1', '2', '3', '4'];
const appender = (a, b) => [b + a, b + a];
R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]

/* into */ // Style Map
const numbers = [1, 2, 3, 4];
const transducer = R.compose(R.map(R.add(1)), R.take(2));
R.into([], transducer, numbers); //=> [2, 3]
const intoArray = R.into([]);
intoArray(transducer, numbers); //=> [2, 3]

/* chain */ //Maps a function over a list concatenates the result. OPP RightToLeft
const duplicate = n => [n, n];
R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1] //TAKE THE FISRT AND ADD

/* reduce */
R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
//          -               -10
//         / \              / \
//        -   4           -6   4
//       / \              / \
//      -   3   ==>     -3   3
//     / \              / \
//    -   2           -1   2
//   / \              / \
//  0   1            0   1

/* reduceBy */
const groupNames = (acc, {name}) => acc.concat(name)
const toGrade = ({score}) =>
  score < 65 ? 'F' :
  score < 70 ? 'D' :
  score < 80 ? 'C' :
  score < 90 ? 'B' : 'A'

var students = [
  {name: 'Abby', score: 83},
  {name: 'Bart', score: 62},
  {name: 'Curt', score: 88},
  {name: 'Dora', score: 92},
]
reduceBy(groupNames, [], toGrade, students)
    //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}

/* reduce */
R.reduce(
  (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
  [],
  [1, 2, 3, 4, 5]) // [1, 2, 3]

/* reduceRight */
R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
  //    -               -2
  //   / \              / \
  //  1   -            1   3
  //     / \              / \
  //    2   -     ==>    2  -1
  //       / \              / \
  //      3   -            3   4
  //         / \              / \
  //        4   0            4   0

/* reduceWhile */
const isOdd = (acc, x) => x % 2 === 1;
const xs = [1, 3, 5, 60, 777, 800];
R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
const ys = [2, 4, 6]
R.reduceWhile(isOdd, R.add, 111, ys); //=> 111

/* scan */ // Similar to reduce -- OPP RishtToLeft
const numbers = [1, 2, 3, 4];
const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]

/* slice */
R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
R.slice(0, 3, 'ramda');                     //=> 'ram'

/* Adjust */
R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']

/* Aperture */
R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
R.aperture(7, [1, 2, 3, 4, 5]); //=> []

/* ascend */
const byAges = R.ascend(R.prop('age'));
const peoples = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByYoungestFirst = R.sort(byAges, peoples);
  //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]

/* flip */
const mergeThree = (a, b, c) => [].concat(a, b, c);
mergeThree(1, 2, 3); //=> [1, 2, 3]
R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]

/* flatten */
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/* indexBy */
const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
R.indexBy(R.prop('id'), list);
//=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}

// R.indexBy(head, getfields)

const raceResultsByFirstName = [1, 2, 3]
R.invert(raceResultsByFirstName);
//=> [3, 2, 1]

/* move */
R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation

/* uniq */
R.uniq([1, 1, 2, 1]); //=> [1, 2]
R.uniq([1, '1']);     //=> [1, '1']
R.uniq([[42], [42]]); //=> [[42]]

/* uniqBy */
R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]

/* uniqWith */
const strEq = R.eqBy(String);
R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
R.uniqWith(strEq)([{}, {}]);       //=> [{}]
R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']

/* repeat */
R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
const obj = {};
const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
repeatedObjs[0] === repeatedObjs[1]; //=> true

/* times */ // Similar to Repeat
R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]

/* unfold */ // Iterator by value until false
const f = n => n > 50 ? false : [-n, n + 10];
R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]

/* reverse */
R.reverse([1, 2, 3]);  //=> [3, 2, 1]
R.reverse([1, 2]);     //=> [2, 1]
R.reverse([1]);        //=> [1]
R.reverse([]);         //=> []
R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']



/**** DELETE ****/

/* unnest */ // Elimina un anidamiento
R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]

/* remove */
R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]

/* tail */
R.tail([1, 2, 3]);  //=> [2, 3]
R.tail([1, 2]);     //=> [2]
R.tail([1]);        //=> []
R.tail([]);         //=> []
R.tail('abc');  //=> 'bc'
R.tail('ab');   //=> 'b'
R.tail('a');    //=> ''
R.tail('');     //=> ''

/* init */
R.init([1, 2, 3]);  //=> [1, 2]
R.init([1, 2]);     //=> [1]
R.init([1]);        //=> []
R.init([]);         //=> []
R.init('abc');  //=> 'ab'
R.init('ab');   //=> 'a'
R.init('a');    //=> ''
R.init('');     //=> ''

/* drop */
R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
R.drop(3, ['foo', 'bar', 'baz']); //=> []
R.drop(4, ['foo', 'bar', 'baz']); //=> []
R.drop(3, 'ramda');               //=> 'da'

/* dropLast */
R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
R.dropLast(3, 'ramda');               //=> 'ra'

/* dropLastWhile */
const lteThree = x => x <= 3;
R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'

/* dropRepeats */
R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]

/* dropRepeatsWith */
const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]

/* dropWhile */ //=> At the first the condition doesnt rigth, break
const lteTwo = x => {
  // console.log('x: ',x)
  (x <= 2) ? console.log('x yes: ',x) : console.log('x no: ',x)
  return x <= 2
}
R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]) //=> [3, 4, 3, 2, 1]
R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'



/**** VERIFY ****/

/* All */
const equals3 = R.equals(3);
R.all(equals3)([3, 3, 3, 3]); //=> true
R.all(equals3)([3, 3, 1, 3]); //=> false

/* any */
const lessThan0 = R.flip(R.lt)(0);
const lessThan2 = R.flip(R.lt)(2);
R.any(lessThan0)([1, 2]); //=> false
R.any(lessThan2)([1, 2]); //=> true

/* All Pass*/
const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');
const isQueenOfSpades = R.allPass([isQueen, isSpade]);
isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true

/* startsWith */
R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
R.startsWith(['b'], ['a', 'b', 'c'])    //=> false

/* endsWith */
R.endsWith('c', 'abc')                //=> true
R.endsWith('b', 'abc')                //=> false
R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
R.endsWith(['b'], ['a', 'b', 'c'])    //=> false

/* includes */
R.includes(3, [1, 2, 3]); //=> true
R.includes(4, [1, 2, 3]); //=> false
R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
R.includes([42], [[42]]); //=> true
R.includes('ba', 'banana'); //=>true

/* non */
const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;
R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
R.or(true, true); //=> true
R.or(true, false); //=> true
R.or(false, true); //=> true
R.or(false, false); //=> false



/**** MERGE ****/

/* xprod */
R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

/* zip */
R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]

/* zipWith */ // The predicated "f" recives the arrays zipped
const f = (x, y) => {
  // ...
};
R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
//=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]

/* secuence */
R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
R.sequence(R.of, Nothing());       //=> [Nothing()]

/* concat */
R.concat('ABC', 'DEF'); // 'ABCDEF'
R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
R.concat([], []); //=> []

/* mergeAll */
R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}



/**** OPP WITH FUNCTIONS ****/

/* AP *///Use multiple functions, similar to chain
R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
// R.ap can also be used as S combinator
// when only two functions are passed
R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'

/* Apply */
const nums = [1, 2, 3, -99, 42, 6, 7];
R.apply(Math.max, nums); //=> 42



/**** INDEX ****/

/* over */
const headLenss = R.lensIndex(0);
R.over(headLenss, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']

/* lensIndex */
const headLens = R.lensIndex(0);
R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']



/**** DUDAS ****/
/*
  transducción
  (c → c) → ((a, b) → a) → a → [b] → a
  PARÁMETROS
  Añadido en v0.12.0

  Inicializa un transductor utilizando la función de iterador suministrada. Devuelve un solo elemento iterando a través de la lista, llamando sucesivamente a la función del iterador transformado y pasándole un valor acumulador y el valor actual de la matriz, y luego pasando el resultado a la siguiente llamada.

  La función del iterador recibe dos valores: (acc, valor) . Se envolverá como un transformador para inicializar el transductor. Un transformador se puede pasar directamente en lugar de una función de iterador. En ambos casos, la iteración puede detenerse antes con laR.reduced

  Un transductor es una función que acepta un transformador y devuelve un transformador y se puede componer directamente.

  Un transformador es un objeto que proporciona una función de iterador reductor de 2 aridades, función de valor inicial de paso, aridad de 0, init y resultado de función de extracción de resultado de 1 aridad. La función de paso se utiliza como la función de iterador en reducir. La función de resultados se utiliza para convertir el acumulador final en el tipo de retorno y en la mayoría de los casos es R.identity

  La iteración se realiza R.reducedespués de inicializar el transductor.

  Véase también reducir , reducido , en .
  Abrir en REPLCorre aqui
*/

const numbers = [1, 2, 3, 4];
const transducer = R.compose(R.map(R.add(1)), R.take(2));
R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]

const isOdd = (x) => x % 2 === 1;
const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]



/*
  Lista de transposición
  [[a]] → [[a]]
  PARÁMETROS
  Añadido en v0.19.0

  Transpone las filas y columnas de una lista 2D. Cuando se pasa una lista de nlistas de longitud x, devuelve una lista de xlistas de longitud n.

  Abrir en REPLCorre aqui
*/

R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]

// If some of the rows are shorter than the following rows, their elements are skipped:
R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]



/*
lista transversal
(Applicative f, Traversable t) => (a → f a) → (a → f b) → t a → f (t b)
PARÁMETROS
Añadido en v0.19.0

Mapea una función de Devolución de un Aplicativo sobre un Traversable , luego se usa sequencepara transformar el Traversable de Aplicativo resultante en un Aplicativo de Traversable.

Se envía al traversemétodo del tercer argumento, si está presente.

Véase también la secuencia .
Abrir en REPLCorre aqui
*/

// Returns `Maybe.Nothing` if the given divisor is `0`
const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)

R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing