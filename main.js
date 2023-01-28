// CICLO WHILE
let robot = prompt(
  'Tener un perro conlleva una gran responsabilidad. Por favor, escribe "soy un dueño responsable" aquí debajo si lo comprendes'
);

while (robot != "soy un dueño responsable") {
  robot = prompt(
    'Tener un perro conlleva una gran responsabilidad. Por favor, escribe "soy un dueño responsable" aquí debajo si lo comprendes'
  );
}

let pesoPerro = prompt("¿Cuántos kilos pesa tu perro?");
let edadPerro = prompt("¿Cuántos meses tiene tu perro?");

// FUNCIÓN CACHORRO
const medidaCachorro = 0.01;
function porcentajeCachorro(pesoPerro, medidaCachorro) {
  let resultadoCachorro = pesoPerro * medidaCachorro;
  return resultadoCachorro;
}

// FUNCIÓN ADULTO
const medidaAdulto = 0.025;
function porcentajeAdulto(pesoPerro, medidaAdulto) {
  let resultadoAdulto = pesoPerro * medidaAdulto;
  return resultadoAdulto;
}

let gramos = 0;
let porciones = 0;

// CONDICIONALES
if (edadPerro <= 6) {
  porcentajeCachorro(pesoPerro, medidaCachorro);
  gramos = porcentajeCachorro(pesoPerro, medidaCachorro);
} else {
  porcentajeAdulto(pesoPerro, medidaAdulto);
  gramos = porcentajeAdulto(pesoPerro, medidaAdulto);
}

if (edadPerro <= 2) {
  porciones = "4 a 6";
} else if (edadPerro == 3) {
  porciones = "4";
} else if (edadPerro > 3 && edadPerro <= 6) {
  porciones = "2 a 3";
} else {
  porciones = "2";
}

alert(
  "Tu perro debería comer " +
    gramos.toFixed(3) +
    " gramos por día dividido en " +
    porciones +
    " porciones"
);
