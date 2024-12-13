var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split(" ");

console.log(typeof lines);

var numA = parseInt(lines.shift()); //Converte para numero inteiro
var binA = numA.toString(2).padStart(32, '0'); //Trasforma em string para converter em binario e adiciona valores a esquerda

var numB = parseInt(lines.shift());
var binB = numB.toString(2).padStart(32, '0');
var somaBin = (numA ^ numB) //bitwise OR

console.log(binA);
console.log(binB);

console.log(somaBin);