class Perro {
  constructor(nombre, peso, edad, id) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.gramos = 0;
    this.porciones = 0;
    this.id = id;
  }
}

const formulario = document.getElementById("formulario");
const cardsPerros = document.getElementById("cardsPerros");

//CARDS

const crearCardPerro = (perro, cardsPerros) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<div class="iconBox" onclick="eliminarPerro(${perro.id})"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#283618" 
                              class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 
                              0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 
                              2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 
                              7.293 5.354 4.646z"/> </svg> </div>
                              <p class = "dogName">${perro.nombre} </p> 
                              <p class = "dogInfo"><b>Peso</b>: ${perro.peso} </p>
                              <p class = "dogInfo"><b>Edad</b>: ${perro.edad} </p>
                              <p class = "dogInfo"><b>Gramos al día</b>: ${perro.gramos} </p>
                              <p class = "dogInfo"><b>Porciones al día</b>: ${perro.porciones} </p>
                              <button class="boton" onclick="mostrarRecomendado(${perro.id})">Alimento recomendado</button>
                              `;
  cardsPerros.appendChild(card);
};

let arrayPerros = [];
if (localStorage.getItem("arrayPerros")) {
  arrayPerros = JSON.parse(localStorage.getItem("arrayPerros"));
  arrayPerros.forEach((perro) => {
    crearCardPerro(perro, cardsPerros);
  });
}

//FORMULARIO
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombrePerro = document.getElementById("nombre");
  const pesoPerro = document.getElementById("peso");
  const edadPerro = document.getElementById("edad");

  if (
    nombrePerro.value != "" &&
    pesoPerro.value != "" &&
    edadPerro.value != ""
  ) {
    const perroIngresado = new Perro(
      nombrePerro.value,
      pesoPerro.value,
      edadPerro.value,
      Math.floor(Math.random() * Date.now())
    );
    arrayPerros.push(perroIngresado);
    formulario.reset();

    calculoDeRacion(arrayPerros);
    localStorage.setItem("arrayPerros", JSON.stringify(arrayPerros));

    crearCardPerro(perroIngresado, cardsPerros);
  } else {
    Swal.fire({
      title: "Por favor, ingrese todos los datos solicitados.",
      color: "black",
      text: "Intente nuevamente.",
      icon: "warning",
      iconColor: "#606c38",
      backdrop: "rgba(0, 0, 0, 0.39)",
      background: "#fefae0",
      confirmButtonColor: "#283618",
    });
  }
});

// Función cachorro para el cálculo.
const medidaCachorro = 0.01;
function porcentajeCachorro(pesoPerro, medidaCachorro) {
  let resultadoCachorro = pesoPerro * medidaCachorro;
  return resultadoCachorro;
}

// Función adulto para el cálculo.
const medidaAdulto = 0.025;
function porcentajeAdulto(pesoPerro, medidaAdulto) {
  let resultadoAdulto = pesoPerro * medidaAdulto;
  return resultadoAdulto;
}

//CÁLCULO FINAL
const calculoDeRacion = (arrayPerros) => {
  let gramos = 0;
  let porciones = 0;

  let perro = arrayPerros[arrayPerros.length - 1];
  if (perro.edad <= 6) {
    gramos = porcentajeCachorro(perro.peso, medidaCachorro);
  } else {
    gramos = porcentajeAdulto(perro.peso, medidaAdulto);
  }

  if (perro.edad <= 2) {
    porciones = "4 a 6";
  } else if (perro.edad == 3) {
    porciones = "4";
  } else if (perro.edad > 3 && perro.edad <= 6) {
    porciones = "2 a 3";
  } else {
    porciones = "2";
  }

  perro.gramos = gramos.toFixed(3);
  perro.porciones = porciones;
};

//ALIMENTO RECOMENDADOS
let arrayAlimentos = [];
const arrayAlimentosUrl = "JSON/alimentos.json";

fetch(arrayAlimentosUrl)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    arrayAlimentos = datos;
  })
  .catch((error) => console.log(error));

let alimentoRecomendado;

const mostrarRecomendado = (id) => {
  let perro = arrayPerros.find((perro) => perro.id === id);
  if (perro) {
    arrayAlimentos.forEach((recomendado) => {
      if (
        perro.peso >= recomendado.pesoMinimo &&
        perro.peso < recomendado.pesoMaximo &&
        perro.edad >= recomendado.edadMinima &&
        perro.edad < recomendado.edadMaxima
      ) {
        alimentoRecomendado = recomendado;
        let text = `Para ${perro.nombre} te recomendamos ${alimentoRecomendado.nombre}, de ${alimentoRecomendado.marca},
      para que tu perro tenga todos los nutrientes necesarios para una vida más saludable.`;
        Swal.fire({
          title: "Alimento recomendado:",
          color: "black",
          text: text,
          backdrop: "rgba(0, 0, 0, 0.39)",
          background: "#fefae0",
          confirmButtonColor: "#283618",
        });
      }
    });
  }
};

const eliminarPerro = (id) => {
  let perro = arrayPerros.find((perro) => perro.id === id);
  const indice = arrayPerros.indexOf(perro);
  arrayPerros.splice(indice, 1);
  cardsPerros.innerHTML = "";
  arrayPerros.forEach((perro) => {
    crearCardPerro(perro, cardsPerros);
  });
  localStorage.setItem("arrayPerros", JSON.stringify(arrayPerros));
};

const borrarPerros = document.getElementById("borrarPerros");

borrarPerros.addEventListener("click", () => {
  arrayPerros = [];
  localStorage.clear();
  cardsPerros.innerHTML = "";
});
