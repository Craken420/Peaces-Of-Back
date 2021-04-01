const R = require('ramda')
/**** Parse ****/

/* zipObj */
R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
let layers = [{'id':1,'name':'lola'}, {'id': 2, 'name':'lolo'}]
var layerMap = R.zipObj(R.pluck('id', layers), layers);
let getId = R.pluck('id')
console.log('1: ',getId([{'id':1,'name':'lola'}, {'id': 2, 'name':'lolo'}]))
console.log('2: ',R.pluck('id', layers))
console.log('3: ',layerMap)

/* zipWith */ // The predicated "f" recives the arrays zipped
const f = (x, y) => {
  // ...
};
R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']); //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]

/* toPairs Object */
R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]

/* toPairsIn Object */
const FL = function() { this.x = 'X'; };
FL.prototype.y = 'Y';
const fL = new FL();
R.toPairsIn(fL); //=> [['x','X'], ['y','Y']]



/***** RECORRER *****/

/* forEachObjIndexed */

// const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
// R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}

// logs x:1
// logs y:2

/* mapObjIndexed */
const xyz = { x: 1, y: 2, z: 3 };
const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }

// My Example
const shows = (param1, param2, param3, param4) => {
    // console.log('param1: ',param1,'\nparam2: ',param2,'\nparam3: ',param3,'\nparam4: ',param4)
    return param1 + 2
}
const mapObj = (fn, obj) => R.mapObjIndexed(fn, obj); //=> { x: 'x2', y: 'y4', z: 'z6' }
    // console.log(mapObj(shows, xyz))



/**** COMPARE ****/

/* comparator */ //=> A: CURRENT, B:NEXT
const byAge = R.comparator((a, b) => a.age < b.age);
const people = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByIncreasingAge = R.sort(byAge, people);
    //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]

/* differenceWith */
const cmp = (x, y) => x.a === y.a;
const l1 = [{a: 1}, {a: 2}, {a: 3}];
const l2 = [{a: 3}, {a: 4}];
R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]



/*** Get ***/

/* take */
const personnelL = [
  'Dave Brubeck',
  'Paul Desmond',
  'Eugene Wright',
  'Joe Morello',
  'Gerry Mulligan',
  'Bob Bates',
  'Joe Dodge',
  'Ron Crotty'
];
const takeFiveS = R.take(5);
takeFiveS(personnelL);
    //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']

/* takeLast */
const personnel = [
  'Dave Brubeck',
  'Paul Desmond',
  'Eugene Wright',
  'Joe Morello',
  'Gerry Mulligan',
  'Bob Bates',
  'Joe Dodge',
  'Ron Crotty'
];
const takeFive = R.takeLast(2);
takeFive(personnel); //=> ['Joe Dodge','Ron Crotty']

/* takeLastWhile */
const isNotOne = x => x !== 1;
R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'

/* takeWhile */
R.takeWhile(x => x != 4, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'

/* pluck */
var getAges = R.pluck('age');
getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}

/* pick */
R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}

/* pickAll Object */
R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}

/* pickBy Object */
const isUpperCase = (val, key) => key.toUpperCase() === key;
R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}

/* proyecto */
const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
const kids = [abby, fred];
R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]

/* Objeto prop */
R.prop('x', {x: 100}); //=> 100
R.prop('x', {}); //=> undefined
R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4

/* PropOr */
const alice = {
    name: 'ALICE',
    age: 101
  };
  const favorite = R.prop('favoriteLibrary');
  const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
  favorite(alice);  //=> undefined
  favoriteWithDefault(alice);  //=> 'Ramda'

/* Props */
R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'

/* find */
const xs = [{a: 1}, {a: 2}, {a: 3}];
R.find(R.propEq('a', 2))(xs); //=> {a: 2}
R.find(R.propEq('a', 4))(xs); //=> undefined

/* findIndex */
const xsS = [{a: 1}, {a: 2}, {a: 3}];
R.findIndex(R.propEq('a', 2))(xsS); //=> 1
R.findIndex(R.propEq('a', 4))(xsS); //=> -1

/* findLast */
const xsL = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLast(R.propEq('a', 1))(xsL); //=> {a: 1, b: 1}
R.findLast(R.propEq('a', 4))(xsL); //=> undefined

/* findLastIndex */
const xsR = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLastIndex(R.propEq('a', 1))(xsR); //=> 1
R.findLastIndex(R.propEq('a', 4))(xsR); //=> -1

/* View */
const xLens = R.lensProp('x');
R.view(xLens, {x: 1, y: 2});  //=> 1
R.view(xLens, {x: 4, y: 2});  //=> 4

/* path */
R.path(['a', 'b'], {a: {b: 2}}); //=> 2
R.path(['a', 'b'], {c: {b: 2}}); //=> undefined

/* pathOr */
R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"



/***** ADD *****/

/* assoc */
R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}

/* assocPath */
R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
// Propiedades no primitivas se copian por referencia.
// Any missing or non-object keys in path will be overridden
R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}



/*** Edit ***/
/* partition */
R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });

/* repeat */
R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
const obj = {};
const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
repeatedObjs[0] === repeatedObjs[1]; //=> true

/* reject */
const isOdd = (n) => n % 2 === 1;
R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}

/* ascend */
const byAgeS = R.ascend(R.prop('age'));
const peopleS = [
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByYoungestFirstE = R.sort(byAgeS, peopleS);
    //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]



/* Invert */
const raceResultsByFirstName = {
    first: 'alice',
    second: 'jake',
    third: 'alice',
  };
  R.invert(raceResultsByFirstName); //=> { 'alice': ['first', 'third'], 'jake':['second'] }

/* invertObj */
const raceResultsS = {
    first: 'alice',
    second: 'jake'
  };
  R.invertObj(raceResultsS); //=> { 'alice': 'first', 'jake':'second' }
  // Alternatively:
  const raceResults = ['alice', 'jake'];
  R.invertObj(raceResults); //=> { 'alice': '0', 'jake':'1' }

/* indexBy */
const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
R.indexBy(R.prop('id'), list);
    //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}


/*** Set ***/

/* Set */
const xLensS = R.lensProp('x');
R.set(xLensS, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
R.set(xLensS, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}

/**** Delete ****/

/* Dissoc */
R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}

/* Dissoc Path */
R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}

/* omit */
R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}



/***** Verify *****/

/* allPass */
const isQueenN = R.propEq('rank', 'Q');
const isSpadeN = R.propEq('suit', '♠︎');
const isQueenOfSpadesN = R.allPass([isQueenN, isSpadeN]);
isQueenOfSpadesN({rank: 'Q', suit: '♣︎'}); //=> false
isQueenOfSpadesN({rank: 'Q', suit: '♠︎'}); //=> true

/* eqProps */
const o1 = { a: 1, b: 2, c: 3, d: 4 };
const o2 = { a: 10, b: 20, c: 3, d: 40 };
R.eqProps('a', o1, o2); //=> false
R.eqProps('c', o1, o2); //=> true

/* Has */
const hasName = R.has('name');
hasName({name: 'alice'});   //=> true
hasName({name: 'bob'});     //=> true
hasName({});                //=> false
const point = {x: 0, y: 0};
const pointHas = R.has(R.__, point);
pointHas('x');  //=> true
pointHas('y');  //=> true
pointHas('z');  //=> false

/* Has In */
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  Rectangle.prototype.area = function() {
    return this.width * this.height;
  };
  const square = new Rectangle(2, 2);
  R.hasIn('width', square);  //=> true
  R.hasIn('area', square);  //=> true

/* Has Path */
R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
R.hasPath(['a', 'b'], {});                  // => false

/* Where */
// pred :: Object -> Boolean
const pred = R.where({
    a: R.equals('foo'),
    b: R.complement(R.equals('bar')),
    x: R.gt(R.__, 10),
    y: R.lt(R.__, 20)
  });
  pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
  pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
  pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
  pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
  pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false

/* WhereQ */
// pred :: Object -> Boolean
const predD = R.whereEq({a: 1, b: 2});
predD({a: 1});              //=> false
predD({a: 1, b: 2});        //=> true
predD({a: 1, b: 2, c: 3});  //=> true
predD({a: 1, b: 1});        //=> false



/**** Functions ****/

/* applySpec */
const getMetrics = R.applySpec({
    sum: R.add,
    nested: { mul: R.multiply }
  });
  getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }

/* evolve */
const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
const transformations = {
  firstName: R.trim,
  lastName: R.trim, // Will not get invoked.
  data: {elapsed: R.add(1), remaining: R.add(-1)}
};
R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}



/**** Merge ****/

/* flatten */
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

/* Merge */
R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
    //=> { 'name': 'fred', 'age': 40 }
const withDefaults = R.merge({x: 0, y: 0});
withDefaults({y: 2}); //=> {x: 0, y: 2}

/* MergeAll */
R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}

/* mergeDeepLeft */
R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
                { age: 40, contact: { email: 'baa@example.com' }});
    //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}

/* mergeDeepRight */
R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
                 { age: 40, contact: { email: 'baa@example.com' }});
    //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}

/* mergeDeepWith */
R.mergeDeepWith(R.concat,
    { a: true, c: { values: [10, 20] }},
    { b: true, c: { values: [15, 35] }});
    //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}

/* mergeDeepWithKey */ //Dudes
let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
R.mergeDeepWithKey(concatValues,
                   { a: true, c: { thing: 'foo', values: [10, 20] }},
                   { b: true, c: { thing: 'bar', values: [15, 35] }});
    //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}

/* mergeLeft Object */
R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
    //=> { 'name': 'fred', 'age': 40 }
const resetToDefault = R.mergeLeft({x: 0});
resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}

/* mergeRight */
R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
    //=> { 'name': 'fred', 'age': 40 }
const withDefaultsT = R.mergeRight({x: 0, y: 0});
withDefaultsT({y: 2}); //=> {x: 0, y: 2}

/* merge with obj */
R.mergeWith(R.concat,
            { a: true, values: [10, 20] },
            { b: true, values: [15, 35] });
    //=> { a: true, b: true, values: [10, 20, 15, 35] }

/* objeto mergeWithKey */
let concatValuesS = (k, l, r) => k == 'values' ? R.concat(l, r) : r
R.mergeWithKey(concatValuesS,
               { a: true, thing: 'foo', values: [10, 20] },
               { b: true, thing: 'bar', values: [15, 35] });
    //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }

/* objOf */
const matchPhrases = R.compose(
  R.objOf('must'),
  R.map(R.objOf('match_phrase'))
);
matchPhrases(['foo', 'bar', 'baz']);
    //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}



/*** Data */

/* Clone */
const objects = [{}, {}, {}];
const objectsClone = R.clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false

/* Keys */
R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']

/* keysIn */
const FLL = function() { this.x = 'X'; };
FLL.prototype.y = 'Y';
const fLL = new FLL();
R.keysIn(fLL); //=> ['x', 'y']

/* lens */
const xLensE = R.lens(R.prop('x'), R.assoc('x'));
R.view(xLensE, {x: 1, y: 2});            //=> 1
R.set(xLensE, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
R.over(xLensE, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}

/* lensPath */
const xHeadYLens = R.lensPath(['x', 0, 'y']);
R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
    //=> 2
R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
    //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
    //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}

/* lensProp */
const xLensO = R.lensProp('x');
R.view(xLensO, {x: 1, y: 2});            //=> 1
R.set(xLensO, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
R.over(xLensO, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
