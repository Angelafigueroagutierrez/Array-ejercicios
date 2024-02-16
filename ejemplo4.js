// Ordenar un Array

const numerosOrdenados = (arreglo = undefined) => {
    return console.log({
       
        ascendentes:arreglo.sort(function(a,b)=>a-b),
        descendentes:arreglo.sort(function(a,b)=>b-a),
    })
}
numerosOrdenados([2,7,5,9,3]);