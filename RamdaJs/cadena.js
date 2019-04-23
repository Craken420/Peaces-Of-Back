/**** Parse ****/

/* pair */
R.pair('foo', 'bar'); //=> ['foo', 'bar']






/**** Get ****/

/*nth */
R.nth(2, 'abc'); //=> 'c'
R.nth(3, 'abc'); //=> ''


/* take */
R.take(3, 'ramda');               //=> 'ram'


/* takeLast */
R.takeLast(3, 'ramda');               //=> 'mda'


/* takeLastWhile */
const isNotOne = x => x !== 1;
R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'


/* takeWhile */
R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'


/* toString */
function Point(x, y) {
    this.x = x;
    this.y = y;
}
  
Point.prototype.toString = function() {
    return 'new Point(' + this.x + ', ' + this.y + ')';
};

R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
//   Abrir en REPLCorre aqui
R.toString(42); //=> '42'
R.toString('abc'); //=> '"abc"'
R.toString([1, 2, 3]); //=> '[1, 2, 3]'
R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'






/**** EDIT ****/


/* toLower */
R.toLower('XYZ'); //=> 'xyz'


/* toUpper */
R.toUpper('abc'); //=> 'ABC'


/* trim */
R.trim('   xyz  '); //=> 'xyz'
R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']


/* reverse */
R.reverse('abc');      //=> 'cba'
R.reverse('ab');       //=> 'ba'
R.reverse('a');        //=> 'a'
R.reverse('');         //=> ''



/**** DELETE ****/

/* tail */
R.tail('abc');  //=> 'bc'
R.tail('ab');   //=> 'b'
R.tail('a');    //=> ''
R.tail('');     //=> ''


/* init */
R.init('abc');  //=> 'ab'
R.init('ab');   //=> 'a'
R.init('a');    //=> ''
R.init('');     //=> ''






/**** VERIFY ****/

/* startsWith */
R.startsWith('a', 'abc')                //=> true
R.startsWith('b', 'abc')                //=> false


/* endsWith */
R.endsWith('c', 'abc')                //=> true
R.endsWith('b', 'abc')                //=> false
