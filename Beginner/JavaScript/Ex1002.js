var input = require("fs").readFileSync("stdin", "utf8");
var linhas = input.split(" ");

console.log(linhas); //Exibe o array de linhas
var n = 3.14159;
var raio = parseFloat(linhas.shift()); //Remove o primeiro elemento do array e converte em number
console.log(raio);
var area = n * (raio * raio);
console.log('A= ' + area.toFixed(4));