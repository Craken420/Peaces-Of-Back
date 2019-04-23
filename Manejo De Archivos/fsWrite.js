const fs = require('fs')
let buffer = Buffer.alloc(8675); 
fs.open ('Archivos/Something Abou Us.txt', "w", (err, fd) => {
    fs.write (fd, buffer, 309, 8366, 100, (err, writtenBytes, buffer) => {
        console.log ( `Escribió ${writtenBytes.toString()} bytes al archivo`); 
        console.log(`${writtenBytes.toString()} `)
        // Escribió 8366 bytes al archivo
    });
});
