const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('ascii');
// const cent = Buffer.from([0,1,1,1,1,'D',0,'E',1,'F',0,'E',2,'B',2,1,2,1,2,'C',2,'E',0,5,2,1,3,'C',2,7,,2,8,3,6,3,2,2,5,3,'C']);
// // const cent = Buffer.from('1Pj871bHSyikzj8ejKuhswqSU1o');
// // console.log(decoder.write(cent));
// var array = [0,1,1,1,1,'D',0,'E',1,'F',0,'E',2,'B',2,1,2,1,2,'C',2,'E',0,5,2,1,3,'C',2,7,,2,8,3,6,3,2,2,5,3,'C']
// var cadena = '01111D0E1F0E2B21212C2E05213C27283632253C'
// const decoder2 = new StringDecoder('latin1');
// const cent2 = Buffer.from(cent);
// // console.log(decoder2.write(cent2));
// const buf6 = Buffer.from(cadena, 'latin1');
// console.log(buf6.toString());

const buf = Buffer.from('hello world', 'ascii');

console.log(buf.toString('hex'));
// Prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
// Prints: aGVsbG8gd29ybGQ=
console.log(buf.toString('ascii'));


const buf1 = new Buffer('this is a tést');
const buf2 = new Buffer('7468697320697320612074c3a97374', 'hex');

console.log(buf1.toString());
// Prints: this is a tést
console.log(buf2.toString());
// Prints: this is a tést
console.log(buf1.toString('ascii'));
// Prints: this is a tC)st

const buf3 = new Buffer('01111D0E1F0E2B21212C2E05213C27283632253C')

    console.log(buf3.toString('latin1'));
    
    console.log(buf3.toString('hex'))
    console.log(buf3.toString('utf8', 0, 3));
    console.log(buf2.toString(undefined, 0, 3));

const buffer = require('buffer');
const newBuf = buffer.transcode(Buffer.from('01111D0E1F0E2B21212C2E05213C27283632253C'), 'utf8', 'ascii');
console.log(newBuf.toString('latin1'));
// Prints: '?'
// console.log('buf3b: ', buf3.toString('ascii'));
// // Prints: this is a tést
// console.log('buf3b: ', buf3.toString('ascii'));
// // Prints: this is a tC)st

const buff = Buffer.alloc(256);

const len = buff.write('\u00bd + \u00bc = \u00be', 0);

console.log(`${len} bytes: ${buff.toString('utf8', 0, len)}`);
// Prints: 12 bytes: ½ + ¼ = ¾