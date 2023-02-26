// let pesoPerro = parseInt(
//   prompt("¿Cuántos kilos pesa tu perro? - Mínimo 0 / máximo 150")
// );
// while (isNaN(pesoPerro) || pesoPerro < 0 || pesoPerro >= 150) {
//   pesoPerro = parseInt(
//     prompt("¿Cuántos kilos pesa tu perro? - Mínimo 0 / máximo 150")
//   );
// }

// let edadPerro = parseInt(
//   prompt("¿Cuántos meses tiene tu perro? - Mínimo 0 / máximo 500")
// );
// while (isNaN(edadPerro) || edadPerro < 0 || edadPerro >= 500) {
//   edadPerro = parseInt(
//     prompt("¿Cuántos meses tiene tu perro? - Mínimo 0 / máximo 500")
//   );
// }

// // FUNCIÓN CACHORRO
// const medidaCachorro = 0.01;
// function porcentajeCachorro(pesoPerro, medidaCachorro) {
//   let resultadoCachorro = pesoPerro * medidaCachorro;
//   return resultadoCachorro;
// }

// // FUNCIÓN ADULTO
// const medidaAdulto = 0.025;
// function porcentajeAdulto(pesoPerro, medidaAdulto) {
//   let resultadoAdulto = pesoPerro * medidaAdulto;
//   return resultadoAdulto;
// }

// let gramos = 0;
// let porciones = 0;

// // CONDICIONALES
// if (edadPerro <= 6) {
//   porcentajeCachorro(pesoPerro, medidaCachorro);
//   gramos = porcentajeCachorro(pesoPerro, medidaCachorro);
// } else {
//   porcentajeAdulto(pesoPerro, medidaAdulto);
//   gramos = porcentajeAdulto(pesoPerro, medidaAdulto);
// }

// if (edadPerro <= 2) {
//   porciones = "4 a 6";
// } else if (edadPerro == 3) {
//   porciones = "4";
// } else if (edadPerro > 3 && edadPerro <= 6) {
//   porciones = "2 a 3";
// } else {
//   porciones = "2";
// }

// class Alimentos {
//   constructor(nombre, marca, pesoMinimo, pesoMaximo, edadMinima, edadMaxima) {
//     this.nombre = nombre;
//     this.marca = marca;
//     this.pesoMinimo = pesoMinimo;
//     this.pesoMaximo = pesoMaximo;
//     this.edadMinima = edadMinima;
//     this.edadMaxima = edadMaxima;
//   }
// }

// const alimentoCachorroMini = new Alimentos(
//   "Purina One Mini Junior < 10kg",
//   "Purina",
//   0,
//   10,
//   0,
//   6
// );

// const alimentoCachorroGrande = new Alimentos(
//   "Royal Canin Maxi Puppy > 10 kg",
//   "Royal Canin",
//   10,
//   150,
//   0,
//   6
// );

// const alimentoAdultoMini = new Alimentos(
//   "Purina Pro Plan small and mini adult",
//   "Purina Pro Plan",
//   0,
//   15,
//   6,
//   500
// );

// const alimentoAdultoGrande = new Alimentos(
//   "Pedigree adulto - vital protection",
//   "Pedigree",
//   15,
//   150,
//   6,
//   500
// );

// const arrayAlimentos = [
//   alimentoCachorroMini,
//   alimentoCachorroGrande,
//   alimentoAdultoMini,
//   alimentoAdultoGrande,
// ];

// let alimentoRecomendado;

// arrayAlimentos.forEach((recomendado) => {
//   if (
//     pesoPerro >= recomendado.pesoMinimo &&
//     pesoPerro < recomendado.pesoMaximo &&
//     edadPerro >= recomendado.edadMinima &&
//     edadPerro < recomendado.edadMaxima
//   ) {
//     alimentoRecomendado = recomendado;
//   }
// });

// alert(
//   "Tu perro debería comer " +
//     gramos.toFixed(3) +
//     " kilos por día dividido en " +
//     porciones +
//     " porciones. Te recomendamos " +
//     alimentoRecomendado.nombre +
//     ", de " +
//     alimentoRecomendado.marca +
//     ", para que tu perro tenga todos los nutrientes necesarios para una vida más saludable."
// );
