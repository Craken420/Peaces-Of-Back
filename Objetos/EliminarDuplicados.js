let set                 = new Set( nomNuevoArchivo.map( JSON.stringify ) )
let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
    
console.log( arrSinDuplicaciones );