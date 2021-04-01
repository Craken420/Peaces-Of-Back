var listaTextos = [
	'¡Hola Mundo!',
	'miCorreo@gmail.com',
	'La teoría de “Pattern Machine” dice…',
	'correoFalso@yahoo.es',
	'En un lugar de la Mancha, cuyo nombre no quiero acordarme…',
	'+34 91 123 456 789',
	'estoNOesUnCorreoNoTieneArroba.com ',
	'RaMoN@jarroba.com',
	'Calle Alcalá 12345 Madrid, Madrid'
];

var patron = /[A-Za-z]+@[a-z]+\.[a-z]+/;

for (i = 0; i < listaTextos.length; i++) {
	texto = listaTextos[i];
	var esCoincidente = patron.test(texto);

	if (esCoincidente) {
		console.log('Correo reconocido: '+ texto);
	}
}