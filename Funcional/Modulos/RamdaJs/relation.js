const R = require('ramda')

/**** RANGE ****/

/* clamp */ // => if the value doesnt right return the nearest value
console.log(R.clamp(-1, 10, -2)) // => 1
console.log(R.clamp(1, 12, 15)) // => 10
console.log(R.clamp(1, 10, 4))  // => 4


/* difference */
R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]


/* differenceWith */
const cmp = (x, y) => x.a === y.a;
const l1 = [{a: 1}, {a: 2}, {a: 3}];
const l2 = [{a: 3}, {a: 4}];
R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]



/**** Test ****/

/* eqBy */ //Both are the same after the function
R.eqBy(Math.abs, 5, -5); //=> true

/*** GET ***/
R.max(789, 123); //=> 789
R.max('a', 'b'); //=> 'b'