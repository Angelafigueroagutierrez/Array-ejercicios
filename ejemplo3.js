// Buscar un elemento en un Array

let array = [10, "Hola", true, 5.5, "Mundo", false, 7, "JavaScript", 3, "Programación"];
let elementoBuscar = "Mundo";

let indice1 = array.indexOf(elementoBuscar);
if (indice1 !== -1) {
    console.log(`El elemento "${elementoBuscar}" se encuentra en la posición ${indice1} del array.`);
} else {
    console.log(`El elemento "${elementoBuscar}" no se encuentra en el array.`);
}

let elementoEncontrado = array.find(elemento => elemento === elementoBuscar);
if (elementoEncontrado) {
    let indice3 = array.indexOf(elementoEncontrado);
    console.log(`El elemento "${elementoBuscar}" se encuentra en la posición ${indice3} del array.`);
} else {
    console.log(`El elemento "${elementoBuscar}" no se encuentra en el array.`);
}