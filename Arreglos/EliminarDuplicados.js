//Eliminar objetos dubplicados de un array

let array = [
    { id: 1, nombre: 'casa' },
    { id: 2, nombre: 'fruta' },
    { id: 3, nombre: 'mascotas' },
    { id: 1, nombre: 'casa' },
    { id: 2, nombre: 'fruta' },
    { id: 4, nombre: 'cosas' },
    { id: 5, nombre: 'otros' }
  ];

  let set                 = new Set( array.map( JSON.stringify ) )
  let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
  
  console.log( arrSinDuplicaciones );

let set = new Set(array.map( JSON.stringify))
let arrSinDuplicaciones = Array.from(set).map(JSON.parse);
console.log( arrSinDuplicaciones );

//--------------------------------------------------------------------------------------

Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  });

var myArr = [ 1, 2, 3, 'foo', 'bar', 'Hello World', 2, 3, 'bar', 1, 4, 5];
console.log( myArr.unique() );

//----------------------------------------------------------------------------------------------

var arrayWithDuplicates = [
    {"type":"LICENSE", "licenseNum": "12345", state:"NV"},
    {"type":"LICENSE", "licenseNum": "A7846", state:"CA"},
    {"type":"LICENSE", "licenseNum": "12345", state:"OR"},
    {"type":"LICENSE", "licenseNum": "10849", state:"CA"},
    {"type":"LICENSE", "licenseNum": "B7037", state:"WA"},
    {"type":"LICENSE", "licenseNum": "12345", state:"NM"}
];

function removeDuplicates(originalArray, prop) {
     var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
 }

var uniqueArray = removeDuplicates(arrayWithDuplicates, "licenseNum");
console.log("uniqueArray is: " + JSON.stringify(uniqueArray));
//También puedes probar así:

var arr = {};

for ( var i=0, len=things.thing.length; i < len; i++ )
    arr[things.thing[i]['place']] = things.thing[i];

things.thing = new Array();
for ( var key in arr )
    things.thing.push(arr[key]);

//----------------------------------------------------------------------------------------------

var array = [
    {id:1,nombre:'casa'},
    {id:2,nombre:'fruta'},
    {id:3,nombre:'mascotas'},
    {id:1,nombre:'casa'},
    {id:2,nombre:'fruta'},
    {id:4,nombre:'cosas'},
    {id:5,nombre:'otros'}
];

var hash = {};
array = array.filter(function(current) {
    var exists = !hash[current.id] || false;
    hash[current.id] = true;
    return exists;
});

console.log(JSON.stringify(array));