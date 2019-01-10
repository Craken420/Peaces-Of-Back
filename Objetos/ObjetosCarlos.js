var arr = ['item1','item2','item3']
var obj = {}

for(key in arr){

 obj[arr[key]] = {
  'algo':'algodon',
  'nombre a desplegar': 'nombre hola'
 }
 obj['beto diaz']='betowen'
 obj.num=5
 //console.log(key,arr[key])
}

console.log(obj)

var ar = ['item1']

console.log(obj['item3'])