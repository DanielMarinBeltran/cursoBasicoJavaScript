var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log('Auto ${this.modelo} ${this.annio}')
    }
};

miAuto.marca
// "Toyota"

miAuto.annio
// 2020

miAuto.detalleDelAuto();
// Auto Corolla 2020
// ¿Quién es this?
// Es una variable que hace referencia al objeto. En este caso: this = miAuto.

//---------- FUNCION CONSTRUCTORA -----------

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);