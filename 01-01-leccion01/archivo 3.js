/*
    ejemplos de tipos de 
    datos
*/
// TIPO DE DATO STRINHG

var nombre="joel";

console.log(typeof nombre);

var numero = 10000;
console.log(typeof numero);

var objeto ={
    nombre :"juan",
    apellido : "ramos",
    telefono : "772372961"

};

console.log(objeto);

var bandera = true
console.log(typeof  bandera);

function miFuncion(){

}
console.log(typeof miFuncion);

var simbolo = Symbol("miSimbolo");
console.log(typeof simbolo);

class persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof persona);

var x;
console.log(typeof x);

var y = null;
console.log(typeof y);



var autos =['audi', 'volvo', 'nissan'];
console.log(autos);