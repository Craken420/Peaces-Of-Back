var encoding = require("encoding");

var result = encoding.convert("ola", "Latin1");
console.log(result.toString()); //<Buffer d5 c4 d6 dc>