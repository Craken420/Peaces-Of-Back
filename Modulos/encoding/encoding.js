var encoding = require('encoding')
var qs = require('qs') //e2 9c 80 || e2 9c 88

var result = encoding.convert("%E2%9C%93&a=%e2%9c%88", "ascii");
console.log(result); //<Buffer d5 c4 d6 dc>

var detectedAsUtf8 = qs.parse(`utf8=${result}`, {
    charset: undefined,

    charsetSentinel: true
})
// console.log(detectedAsUtf8)
