var readlines = require('n-readlines'); 
var liner = new readlines('Archivos/Something Abou Us.txt'); 

var vertexes_number = parseInt(liner.next().toString('ascii')); 
var edges_number = parseInt(liner.next().toString('ascii')); 
var edges = []; 
var next; 
while (next = liner.next()) { 
    edges.push(next.toString('ascii').split(' ')); 
}

console.log(edges)