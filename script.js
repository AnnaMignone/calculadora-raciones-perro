class perro {
  constructor(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.gramos = 0;
    this.porciones = 0;
  }
}

class perroCalculado {}

const arrayPerros = [];

const formulario = document.getElementById("formulario");
const cardsPerros = document.getElementById("cardsPerros");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombrePerro = document.getElementById("nombre");
  const pesoPerro = document.getElementById("peso");
  const edadPerro = document.getElementById("edad");
  const perroIngresado = new perro(
    nombrePerro.value,
    pesoPerro.value,
    edadPerro.value
  );
  arrayPerros.push(perroIngresado);
  console.log(arrayPerros);
  formulario.reset();
});
