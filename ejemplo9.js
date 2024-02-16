// Agrupar elementos de un Array por una propiedad

let frutas = [
    { nombre: "Sandia", color: "Verde", cantidad: 5 },
    { nombre: "Banana", color: "Amarillo", cantidad: 3 },
    { nombre: "Mnadarina", color: "Naranja", cantidad: 7 },
    { nombre: "Uva", color: "Morado", cantidad: 4 },
    { nombre: "Pera", color: "Verde", cantidad: 6 },
    { nombre: "Fresa", color: "Rosado", cantidad: 8 }
];
let frutasPorColor = {};
frutas.forEach(fruta => {
    if (frutasPorColor.hasOwnProperty(fruta.color)) {
        frutasPorColor[fruta.color].push(fruta);
    } else {
        frutasPorColor[fruta.color] = [fruta];
    }
});
console.log("Frutas agrupadas por color:", frutasPorColor);