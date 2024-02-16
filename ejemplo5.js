// Filtrar elementos de un Array

let personas = [
    {nombre: 'Ana', edad: 15},
    {nombre: 'Laura', edad: 21},
    {nombre: 'Santito', edad: 20},
    {nombre: 'Sebastian', edad: 3},
    {nombre: 'Maria', edad: 17},
    {nombre: 'Nicolas', edad: 19}
];

let mayores = personas.filter(personas => personas.edad>=18);
console.log ("A continuacion las personas que no pueden hacer un tiberio berenice");
mayores.forEach (personas => console.log(personas.nombre));
mayores.forEach(personas => console.log(${personas.nombre} es mayor de edad));