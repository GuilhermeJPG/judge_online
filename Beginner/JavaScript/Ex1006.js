var input = require("fs").readFileSync("stdin", "utf-8");
var linhas = input.split(" ");

var notaA = parseFloat(linhas.shift());
var notaB = parseFloat(linhas.shift());
var notaC = parseFloat(linhas.shift());

var pesoA = 2;
var pesoB = 3;
var pesoC = 5;

var notaFinalA = (notaA * pesoA);
var notaFinalB = (notaB * pesoB);
var notaFinalC = (notaC * pesoC);

var media = (notaFinalA + notaFinalB + notaFinalC) / (pesoA + pesoB + pesoC);

console.log("MEDIA = " + media.toFixed(1));