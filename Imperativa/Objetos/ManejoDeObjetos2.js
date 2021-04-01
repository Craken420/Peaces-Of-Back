function Persona(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }

var fer = new Persona("Fernando Duclouk", 38, "M");
var alvaro = new Persona("Alvaro Caram", 36, "M");

/***------------------------------------------------------------------------------------------------------*/

function mostrarAutos() {
    var resultado = "Un bonito " + this.marca + " " + this.modelo
      + " " + this.annio;
    console.log(resultado);
}

function Auto(marca, modelo, annio, propietario) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.propietario = propietario;
    this.mostrar = mostrarAutos;
}

var auto1 = new Auto("Eagle", "Talon TSi", 1993, fer);
var auto2 = new Auto("Nissan", "300ZX", 1992, alvaro);


auto1.mostrar()

auto2.mostrar()

