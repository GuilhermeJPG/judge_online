var input = require("fs").readFileSync("stdin", "utf-8");
var linha = input.split(" ")

var numFunc = parseInt(linha.shift());
var numHoras = parseInt(linha.shift());
var salHoras = parseFloat(linha.shift());

var somaSalario = numHoras * salHoras;

console.log("NUMBER = " + numFunc + "\nSALARY = " + somaSalario.toFixed(2));