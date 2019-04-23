/* test */
R.test(/^x/, 'xyz'); //=> true
R.test(/^y/, 'xyz'); //=> false


/* math */
R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
R.match(/a/, 'b'); //=> []
R.match(/a/, null); //=> TypeError: null does not have a method named "match"


/* replace */
R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
// Use the "g" (global) flag to replace all occurrences:
R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
const greet = R.replace('{name}', R.__, 'Hello, {name}!');
greet('Alice'); //=> 'Hello, Alice!'


/* split */
const pathComponents = R.split('/');
R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']


/* splitAt */
R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
R.splitAt(5, 'hello world');      //=> ['hello', ' world']
R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']


/* splitAt */
R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']


/* splitWhen */
R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]


/* join */
const spacer = R.join(' ');
spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
R.join('|', [1, 2, 3]);    //=> '1|2|3'
