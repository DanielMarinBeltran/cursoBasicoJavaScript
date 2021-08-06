var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas); // Muestra todos los datos del array.
console.log(frutas.length); // Longitud del Array.
            // 4
console.log(frutas[0]); //Para conseguir un dato del array.
            // Manzana
var masFrutas = frutas.push("Uvas"); // .push agrega a la parte final de la lista

var ultimo = frutas.pop("Uvas"); // .pop Elimina le ultimo elemento des array.

var nuevaLongitud = frutas.unshift("Uvas"); // .unshift pone el elemento de primero en el Array.

var borrarFruta = frutas.shift("Uvas"); // .shift elimina el primer elemento del Array.

var posicion = frutas.indexOf("Cereza"); // Encuentra la posicion del elemento que le pongas.