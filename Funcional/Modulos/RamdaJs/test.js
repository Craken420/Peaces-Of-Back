const R = require('ramda')
let layers = [{'id':1,'name':'lola'}, {'id': 2, 'name':'lolo'}]
var layerMap = R.zipObj(R.pluck('id', layers), layers);

let getId = R.pluck('id')

console.log(getId([{'id':1,'name':'lola'}, {'id': 2, 'name':'lolo'}]))
console.log(R.pluck('id', layers))
console.log(layerMap)


