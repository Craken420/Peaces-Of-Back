const show = console.log

/* MapSección */
 
 var miMapa = new Map();
 var claveObj = {},
     claveFunc = () => {},
     claveCadena = "Val claveCadena";
     
 // asignando valores
 show('\n#1-Set:',
      '\n  Origen: ',  miMapa);

     miMapa.set(claveObj, "Val claveObj")
     miMapa.set(claveFunc, "Val claveFunc")
     miMapa.set(claveCadena, claveCadena) 
     show('  miMapa.size:', miMapa.size, //-> 3
          '\n  After set:', miMapa );
     

  // obteniendo los valores
  show('\n#2-Get:')
      show('  get(claveObj): ', miMapa.get(claveObj) );       // "Val claveObj"
      show('  get(claveFunc): ', miMapa.get(claveFunc) );      // "Val claveFunc"
      show('  get(claveCadena): ', miMapa.get(claveCadena) );    // "Val claveCadena"
      show('  get({}): ', miMapa.get({}) );
      show('  get(function() {}): ', miMapa.get(function() {}) ) 
      show('  get("Val claveCadena"): ', miMapa.get("Val claveCadena") );  
 
  /* NaN como claves de MapSección */
    // NaN !== NaN es true, porque NaN no distingue unas de otras.
    show('\n#3-Nan como clave:')

    var miMapa2 = new Map();
        show('  miMapa2.set(NaN, "no es un número"): ', miMapa2.set(NaN, "no es un número") );

        show('  miMapa2.get(NaN): ', miMapa2.get(NaN) ); // "no es un número"

    var otroNaN = Number("foo");
        show('  Number("foo"): ', otroNaN ); // NaN
        show('  miMapa2.get(otroNaN): ', miMapa2.get(otroNaN) ); // "no es un número"

/* #4-Iterando Map con for */

  var miMapa3 = new Map();
  miMapa3.set(0, "cero");
  miMapa3.set(1, "uno");

  show('\n#4-Iterando Map con for:')

  show('  [clave, valor] of miMapa3: ')
  for (var [clave, valor] of miMapa3) { 
    show('     Clave:' + clave + " = " + 'Valor:' + valor) } //=> "0 = cero" //=> "1 = uno"

  show('  clave of keys(): ')
  for (var clave of miMapa3.keys()) {
    show('      Clave:' + clave) } //=> "0" //=> "1"

  show('  valor of values(): ')
  for (var valor of miMapa3.values()) {
    show('     Valor:' + valor) } //=> "cero" //=> "uno"


  show('  [clave, valor] of entries(): ')
  for (var [clave, valor] of miMapa3.entries()) {
    show('      Clave:' + clave + " = " + 'Valor:' + valor) } //=> "0 = cero" //=> "1 = uno"


/* Relación con los objetos ArraySección */

  show('\n#4-Relación con los objetos ArraySección:')
  var kvArray = [ ["clave1", "valor1"], ["clave2", "valor2"] ];

  /* El constructor por defecto de Map para transforar un Array 2D (clave-valor) en un mapa */
  var miMapa4 = new Map(kvArray);
    show( '   miMapa4:', miMapa4 ); 
    show( '   miMapa4.get("clave1"):', miMapa4.get("clave1") ); //-> devuelve "valor1"
   
  /* To Array 2D clave-valor */
    show('   Array.from(miMapa4):', Array.from(miMapa4) ); //-> [ ["clave1", "valor1"], ["clave2", "valor2"] ]

  /* O usando los iteradores de claves o valores y convirtiendo a array */
    show('   Array.from( miMapa4.keys() ):', Array.from( miMapa4.keys() ) ); //-> ["clave1", "clave2"]

