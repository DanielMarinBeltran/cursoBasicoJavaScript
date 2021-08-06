var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
]

// FILTER
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

articulosFiltrados

// 0: {nombre: "Libro", costo: 320}
// 1: {nombre: "Teclado", costo: 500}
// length: 2

// MAP

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

// Saldran solo los nombres porque es lo que buscamos.

//FIND

var encuentraArticulo = articulos.find(function(articulo){
    return articulos.nombre === "Laptop";
})

//FOREACH

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// No usa una variable, en este caso mostrara el nombre nomas

//SOME

var articulosBartos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

// Hace validacion de verdadero o falso, en este caso sacaria true