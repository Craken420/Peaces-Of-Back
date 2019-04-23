let arr = [
    "Art.tbl/Tabla.ListaCampos",
    "Tabla.SQL",
    "Art.tbl/EspaciosEspecificos",
    "Art.tbl/Espacios",
    "Art.tbl/Categoria",
    "Art.tbl/Capital",
    "Art.tbl/UltimoMov",
    "Art.tbl/FechaUltimoMov",
    "Art.tbl/NivelAcceso",
    "Art.tbl/Articulo",
    "Art.tbl/Grupo",
    "Art.tbl/Familia",
    "Art.tbl/Descripcion1",
    "Art.tbl/MarcaE",
    "Art.tbl/ModeloE",
    "Art.tbl/LineaE",
    "Art.tbl/NombreCorto",
    "Art.tbl/Linea",
    "Art.tbl/CtaCliente",
    "Art.tbl/TipoEntradaMavi",
    "Art.tbl/codigopadre",
    "Art.tbl/espadre",
    "Art.tbl/FechaLanzamiento",
    "Art.tbl/FechaVigencia"
]

const filtrar = (arr, name) => arr.filter(x => new RegExp(`^${name}\\/`,`gi`).test(x))

console.log('length: ',arr.length)
console.log(filtrar(arr, 'Art.tbl'))