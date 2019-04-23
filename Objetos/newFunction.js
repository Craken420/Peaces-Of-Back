
// Both statements are indeed different. I will focus on the second statement to point out the difference.

var newObj1 = new function () {
    this.prop1 = "test1";
    this.prop2 = "test2"
};
// Is equivalent to the following:

var Example = function () {
    this.prop1 = "test1";
    this.prop2 = "test2"
};

var newObj2 = new Example();


var func=new function(){this.x=10;}

console.log(func);


/*
let func = new Function ([arg1[, arg2[, ...argN]],] functionBody)
In other words, function parameters (or, more precisely, names for them) go first, 
and the body is last. All arguments are strings.
It’s easier to understand by looking at an example. 
Here’s a function with two arguments:
*/
 let sum = new Function('a', 'b', 'return a + b');

console.log('sum = new Function(\'a\', \'b\', \'return a + b\'):  ', sum(1, 2) ); // 3

// If there are no arguments, then there’s only a single argument, the function body:

 let sayHi = new Function('console.log("Hello desde el sayHi = new Function(log)")');

sayHi(); // Hello

let str = 'console.log(\'console string to send newFunction(string)\')'

let funct = new Function(str);
funct()