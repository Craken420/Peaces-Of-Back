var str = `
[Cont.frm/Acciones.DesAfectar]
ActivoCondicion=Cont:Cont

`
let val = str.replace(/^\n/gm, '')
let arrVal = val.split('')
// console.log(val)
arrVal.push('\nAdios')
console.log(arrVal.join(''))

