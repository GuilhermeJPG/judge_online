var input = require("fs").readFileSync("stdin", "utf-8");
var linhas = input.split(" ");

console.log(linhas); //Exibe o array de linhas
var num1 = parseInt(linhas.shift()); // armazena dentro da variavel o primeiro elemento do array.
console.log(num1);
var num2 = parseInt(linhas.shift()); // armazena dentro da variavel o primeiro elemento do array, atualizado.
console.log(num2);
var prod = (num1 * num2); // armazena dentro da variavel o calculo 
console.log("PROD = " + prod);

