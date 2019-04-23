/* Math.abs */ //Return the absolute value of a number
Math.abs(-7.25); // => 7.25

/* Suma */
R.add(2, 3);       //=>  5
R.add(7)(10);      //=> 17


/* sum */
R.sum([2,4,6,8,100,1]); //=> 121


/* subtract */ // Resta
R.subtract(10, 8); //=> 2
const minus5 = R.subtract(R.__, 5);
minus5(17); //=> 12
const complementaryAngle = R.subtract(90);
complementaryAngle(30); //=> 60
complementaryAngle(72); //=> 18


/* multiply */
const double = R.multiply(2);
const triple = R.multiply(3);
double(3);       //=>  6
triple(4);       //=> 12
R.multiply(2, 5);  //=> 10


/* divide */
R.divide(71, 100); //=> 0.71
const half = R.divide(R.__, 2);
half(42); //=> 21
const reciprocal = R.divide(1);
reciprocal(4);   //=> 0.25


/* increment */
R.inc(42); //=> 43


/* decrement */
R.dec(42); //=> 41


/* mean */
R.mean([2, 7, 9]); //=> 6
R.mean([]); //=> NaN


/* median */
R.median([2, 9, 7]); //=> 7
R.median([7, 2, 10, 9]); //=> 8
R.median([]); //=> NaN


/* product */
R.product([2,4,6,8,100,1]); //=> 38400


/* negate */
R.negate(42); //=> -42


/* modulo */
R.modulo(17, 3); //=> 2
// JS behavior:
R.modulo(-17, 3); //=> -2
R.modulo(17, -3); //=> 2
const isOdd = R.modulo(R.__, 2);
isOdd(42); //=> 0
isOdd(21); //=> 1



/* mathMod */
R.mathMod(-17, 5);  //=> 3
R.mathMod(17, 5);   //=> 2
R.mathMod(17, -5);  //=> NaN
R.mathMod(17, 0);   //=> NaN
R.mathMod(17.2, 5); //=> NaN
R.mathMod(17, 5.3); //=> NaN

const clock = R.mathMod(R.__, 12);
clock(15); //=> 3
clock(24); //=> 0

const seventeenMod = R.mathMod(17);
seventeenMod(3);  //=> 2
seventeenMod(4);  //=> 1
seventeenMod(10); //=> 7

