/* And */
R.and(true, true); //=> true
R.and(true, false); //=> false
R.and(false, true); //=> false
R.and(false, false); //=> false

/* Any */
const lessThan0 = R.flip(R.lt)(0);
const lessThan2 = R.flip(R.lt)(2);
R.any(lessThan0)([1, 2]); //=> false
R.any(lessThan2)([1, 2]); //=> true

/* AnyPass*/
const isClub = R.propEq('suit', '♣');
const isSpade = R.propEq('suit', '♠');
const isBlackCard = R.anyPass([isClub, isSpade]);
isBlackCard({rank: '10', suit: '♣'}); //=> true
isBlackCard({rank: 'Q', suit: '♠'}); //=> true
isBlackCard({rank: 'Q', suit: '♦'}); //=> false

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

/* allPass */
const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');
const isQueenOfSpades = R.allPass([isQueen, isSpade]);
isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true

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
const pred = R.whereEq({a: 1, b: 2});
pred({a: 1});              //=> false
pred({a: 1, b: 2});        //=> true
pred({a: 1, b: 2, c: 3});  //=> true
pred({a: 1, b: 1});        //=> false
