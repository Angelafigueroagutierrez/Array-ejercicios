// Convertir un Array en un objeto

let elementos = [1, "Hola", true, { nombre: "Juan" }, [2, 4, 6]];
let objeto = elementos.reduce((acc, elemento, index) => {
    acc[`elemento${index}`] = elemento;
    return acc;
}, {});
console.log("Array original:", elementos);
console.log("Objeto resultante:", objeto);