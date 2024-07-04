import Calculadora from "./calculadora.mjs";

const calculadora = new Calculadora;

console.log("Suma: "+ calculadora.sumar(10,20));
console.log("Resta: "+ calculadora.restar(30,20));
console.log("Multiplicacion: "+ calculadora.multiplicar(10,2));
console.log("Dividir: "+ calculadora.dividir(30,3));