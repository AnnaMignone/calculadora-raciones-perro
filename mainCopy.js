class Perro {
  constructor(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
    this.gramos = 0;
    this.porciones = 0;
  }
}

let arrayPerros = [];
if (localStorage.getItem("arrayPerros")) {
  arrayPerros = JSON.parse(localStorage.getItem("arrayPerros"));
}

const formulario = document.getElementById("formulario");
const cardsPerros = document.getElementById("cardsPerros");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombrePerro = document.getElementById("nombre");
  const pesoPerro = document.getElementById("peso");
  const edadPerro = document.getElementById("edad");
  const perroIngresado = new Perro(
    nombrePerro.value,
    pesoPerro.value,
    edadPerro.value
  );
  arrayPerros.push(perroIngresado);
  formulario.reset();

  calculoDeRacion(arrayPerros);
  localStorage.setItem("arrayPerros", JSON.stringify(arrayPerros));

  mostrarListaPerros(arrayPerros, cardsPerros);
});

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

const mostrarListaPerros = (arrayPerros, cardsPerros) => {
  let perro = arrayPerros[arrayPerros.length - 1];
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<p class = "dogName">${perro.nombre} </p> 
                          <p class = "dogInfo">Peso: ${perro.peso} </p>
                          <p class = "dogInfo">Edad: ${perro.edad} </p>
                          <p class = "dogInfo">Gramos al dia: ${perro.gramos} </p>
                          <p class = "dogInfo">Porciones al dia: ${perro.porciones} </p>`;
  cardsPerros.appendChild(card);
};

//TODO:  PARA ELIMINAR ALGUNA CARD DE UN PERRO.
// Funcion que elimina el producto del carrito:

// const eliminarDelCarrito = (id) => {
//   const producto = carrito.find(producto => producto.id === id);
//   const indice = carrito.indexOf(producto);
//   carrito.splice(indice, 1);
//   mostrarCarrito();

//   //Trabajamos con el localStorage:
//   localStorage.setItem("carrito", JSON.stringify(carrito));
// }

//TODO: PARA BORRAR TODAS LAS CARDS.
// Vaciar todo el carrito:

// const vaciarCarrito = document.getElementById("vaciarCarrito");

// vaciarCarrito.addEventListener("click", () => {
//     eliminarTodoElCarrito();
// })

// const eliminarTodoElCarrito = () => {
//     carrito = [];
//     mostrarCarrito();

//     //LocalStorage:
//     localStorage.clear();
// }

class Alimentos {
  constructor(nombre, marca, pesoMinimo, pesoMaximo, edadMinima, edadMaxima) {
    this.nombre = nombre;
    this.marca = marca;
    this.pesoMinimo = pesoMinimo;
    this.pesoMaximo = pesoMaximo;
    this.edadMinima = edadMinima;
    this.edadMaxima = edadMaxima;
  }
}

const alimentoCachorroMini = new Alimentos(
  "Purina One Mini Junior < 10kg",
  "Purina",
  0,
  10,
  0,
  6
);

const alimentoCachorroGrande = new Alimentos(
  "Royal Canin Maxi Puppy > 10 kg",
  "Royal Canin",
  10,
  150,
  0,
  6
);

const alimentoAdultoMini = new Alimentos(
  "Purina Pro Plan small and mini adult",
  "Purina Pro Plan",
  0,
  15,
  6,
  500
);

const alimentoAdultoGrande = new Alimentos(
  "Pedigree adulto - vital protection",
  "Pedigree",
  15,
  150,
  6,
  500
);

const arrayAlimentos = [
  alimentoCachorroMini,
  alimentoCachorroGrande,
  alimentoAdultoMini,
  alimentoAdultoGrande,
];

let alimentoRecomendado;

const boton = document.getElementById("boton");
const listaAlimentos = document.getElementById("listaAlimentos");

boton.onclick = () => {
  listaAlimentos.innerHTML = "";

  arrayPerros.forEach((perro) => {
    arrayAlimentos.forEach((recomendado) => {
      if (
        perro.peso >= recomendado.pesoMinimo &&
        perro.peso < recomendado.pesoMaximo &&
        perro.edad >= recomendado.edadMinima &&
        perro.edad < recomendado.edadMaxima
      ) {
        alimentoRecomendado = recomendado;
      }
    });
    const cardAlimento = document.createElement("div");
    cardAlimento.className = "cardAlimento";
    cardAlimento.innerHTML = `<p class = "textAlimento">
                      Para ${perro.nombre} te recomendamos ${alimentoRecomendado.nombre}
                      de ${alimentoRecomendado.marca}
                      para que tu perro tenga todos
                      los nutrientes necesarios para
                      una vida más saludable.</p>`;
    listaAlimentos.appendChild(cardAlimento);
  });
};
