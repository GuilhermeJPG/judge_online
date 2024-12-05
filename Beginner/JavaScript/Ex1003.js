var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.split(" ");

console.log("Array: " + linhas); //Exibir o Array de linhas
var a = parseInt(linhas.shift());
console.log("Removeu o primeiro elemento do Array:" + a);
console.log("Array atualizado:" + linhas);
var b = parseInt(linhas.shift());
console.log("Removeu o primeiro elemento do Array atualizado:" + b);

var soma = a + b;

console.log("SOMA = " + soma);
