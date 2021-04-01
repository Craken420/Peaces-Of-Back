/*
    Funciones al estilo jQuery
    para detectar clases, añadir,
    quitar y cambiar.
*/

// removeClass - quita una clase
function removeClass(elem, clase) {
  elem.className = elem.className.split(' ').filter(function(v) {
     return v!= clase;
   }).join(' ');
}

// addClass - añade una clase
function addClass(elem, clase) {
  elem.className += ' ' + clase;
}

// hasClass - true o false si contiene una clase
function hasClass(elem, clase) {
  return new RegExp('(\\s|^)' + clase + '(\\s|$)').test(elem.className);
}

// toggleClass - agrega o quita clase según el estado
function toggleClass(elem, clase) {
  if (hasClass(elem, clase)) {
    removeClass(elem, clase);
  } else {
    addClass(elem, clase);
  }
}