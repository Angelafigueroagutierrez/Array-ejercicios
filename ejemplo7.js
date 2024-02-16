// Eliminar elementos duplicados de un Array

let NumDuplicados = [1, 2, 3, 4, 2, 3, 5, 6, 6];
let NumNoDuplicados = NumDuplicados.filter((item, index) => {
    return NumDuplicados.indexOf(item) === index;
});

console.log("Numeros duplicados:", NumDuplicados);
console.log("Numeros No duplicados:", NumNoDuplicados);