const _ = require('underscore')
const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFileSync)

let enrollment = [
    { enrrolled: 2, grade: 100 },
    { enrrolled: 2, grade: 80 },
    { enrrolled: 1, grade: 89 },
];


_.chain(enrollment)
    .filter(student => student.enrrolled > 1)
    .pluck('grade')
    .value() // 90



readFile('../../Manejo De Archivos/Archivos/Something Abou Us.txt')
    .then(JSON.parse)
    .catch(console.error())
