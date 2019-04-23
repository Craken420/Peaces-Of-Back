const data = [5, 10, 15, 20, 25]

const res = data.reduce((total,currentValue) => {
  return total + currentValue
})

// console.log(res)

//-------------------------------------------------------------
const dat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatValues = dat.reduce((total, value) => {
  return total.concat(value);
}, []);

// console.log(flatValues);

//-------------------------------------------------------------

// const array = ['ola', 'adios', 'bye']
// console.log('array: ',array)
// let cont = 0
// let result = array.reduce((valorAnterior, valorActual) => {
//     return valorAnterior  + '=' + valorActual + '\n' + valorActual
// },'(Inicio)').replace(/$/,'=(Fin)')

// console.log('Result: \n',result)

//-------------------------------------------------------------
Array.prototype.reductor = array => () => array.reduce((a,b) => a.concat(b))

Array.prototype.unico = array => () => Array.from(new Set( array.map( JSON.stringify))).map( JSON.parse )

Array.prototype.flat=function(a){
  return function(){
    return this.reduce(a, [])
  }
}(function(a,b){
  return a.concat(b)
})

Array.prototype.unique = function(a){
    return function(){
      return this.filter(a)
    }
  }((a,b,c) => c.indexOf(a,b+1)<0);


console.log(
[[0,1], [2,3], 2,3, [4,5]]
  .flat()
  .uniques()
)