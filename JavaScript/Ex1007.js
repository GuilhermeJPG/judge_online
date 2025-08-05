var input = require("fs").readFileSync("stdin", "utf-8");
var linha = input.split(" ")

var numA = parseInt(linha.shift());
var numB = parseInt(linha.shift());
var numC = parseInt(linha.shift());
var numD = parseInt(linha.shift());

var diferenca = (numA * numB - numC * numD);

console.log("DIFERENCA = " + diferenca);