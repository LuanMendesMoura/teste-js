import { Calculadora } from './util/Calculadora.js';

const calc = new Calculadora();

const resultado = calc.soma(3, 2);

console.log(calc.soma(3, -1));
console.log(calc.soma(2, -4));
console.log(calc.soma(10, -4));
console.log(calc.soma(7, -4));
console.log(calc.soma(10, 40));