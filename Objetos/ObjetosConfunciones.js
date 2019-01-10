function rectangulo(base,altura){
    this.base = base;
    this.altura = altura;
  }

  function rectangulo(base,altura){
    this.base = base;
    this.altura = altura;
    this.calcularArea = function () { return this.base*this.altura; };
  }

  function getArea(){
    return this.base*this.altura;
  }

  function rectangulo(base,altura){
    this.base = base;
    this.altura = altura;
    this.calcularArea = getArea;
  }

  var r1 = new rectangulo(2,4);
  alert(r1.calcularArea());