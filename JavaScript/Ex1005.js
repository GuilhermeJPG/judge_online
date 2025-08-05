var input = require("fs").readFileSync("stdin", "utf-8");
var linhas = input.split(" ");

console.log(linhas);
var notaA = parseFloat(linhas.shift());
var notaB = parseFloat(linhas.shift());

var pesoA = 3.5;
var pesoB = 7.5;

var notaFinalA = (notaA * pesoA);
var notaFinalB = (notaB * pesoB);

var media = (notaFinalA + notaFinalB) / (pesoA + pesoB);

console.log("MEDIA = " + media.toFixed(5));

