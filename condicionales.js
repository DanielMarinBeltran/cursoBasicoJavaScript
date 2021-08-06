// IF -- ELSE -- ELSE IF
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, sera tu primera votacion");
} else if (edad >18){
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

// Operador ternario

condition ? true : false;

var numero = 1;

var resultado = numero ===1 ? "Soy un uno" : "No, no soy uno";

// Switch.

var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un 10!!");
        break;
    case 100:
        console.log("Soy un 100!");
        break
    default:
        console.log("No soy nada")
}