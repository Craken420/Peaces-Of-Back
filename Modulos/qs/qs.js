var qs = require('qs');
var assert = require('assert');
 
var obj = qs.parse('a=c'); //=> obj:  { a: 'c' }
// console.log('obj: ', obj)//=>

var str = qs.stringify(obj); //=> str:  a=c
// console.log('str: ', str)


var deep = qs.parse('a[b][c][d][e][f][g][h][i]=j', { depth: 4 });
// console.log(deep)  //=> { a: { b: { c: [Object] } } }

// console.log(deep['a']['b']['c']['d']) //=> { e: { '[f][g][h][i]': 'j' } }

var limited = qs.parse('a=b&e=f', { parameterLimit: 2 }) 
// console.log(limited) //=> { a: 'b', e: 'f' }

var prefixed = qs.parse('?a=b&c=d', { ignoreQueryPrefix: true }); 
// console.log(prefixed) //=> { a: 'b', c: 'd' }

var delimited = qs.parse('a=b\r\nc=d', { delimiter: '\r\n' }); 
// console.log(delimited) //=> { a: 'b', c: 'd' }

var regexed = qs.parse('a=b;c=d,e=f', { delimiter: /[;,]/ });
// console.log(regexed)  //=> { a: 'b', c: 'd', e: 'f' }

var withDots = qs.parse('a.b=c', { allowDots: false }); 
// console.log(withDots) //=> { 'a.b': 'c' }

var oldCharset = qs.parse('a=%A7', { charset: 'iso-8859-1' }); 
// console.log(oldCharset) //=> { a: '§' }

var detectedAsUtf8Test = qs.parse('utf8=%E2%9C%93&a=%C3%B8', {
    charset: 'iso-8859-1',
    charsetSentinel: true
}) 
// console.log(detectedAsUtf8Test) //=> { a: 'ø' }

/** Advance usage */

const myString = "Nombre=Categor�as"

const encodedUtfHex = new Buffer(myString).toString('hex')

const decoded = new Buffer(encodedUtfHex, 'hex').toString()

let utf8HexPorcent = encodedUtfHex.split(/(?:(\d\w|\d\d|\w\w))/g).filter(
    Boolean
).join('%').replace(/^/,'%').toLowerCase()

// console.log('encodedUtfHex: ',encodedUtfHex) //=> encodedUtfHex:  4e6f6d6272653d43617465676f72efbfbd6173
// console.log('utf8HexPorcent: ',utf8HexPorcent) //=> utf8HexPorcent:  %4e%6f%6d%62%72%65%3d%43%61%74%65%67%6f%72%ef%bf%bd%61%73
// console.log('decoded: ',decoded) //=> decoded:  Nombre=Categor�as

let testString = `%E2%9C%93&a=${utf8HexPorcent.toLowerCase()}`
// console.log('testString: ',testString) //=> testString:  %E2%9C%93&a=%4e%6f%6d%62%72%65%3d%43%61%74%65%67%6f%72%ef%bf%bd%61%73

var detectedAsUtf8 = qs.parse(`utf8=${testString.toLowerCase()}`, {
        charset: undefined,
    
        charsetSentinel: true
    })
// console.log(detectedAsUtf8) //=> { a: 'Nombre=Categor�as' }