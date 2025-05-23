var input = require("fs").readFileSync("stdin", "utf-8");
var linha = input.split("\n");

console.log(linha);

var raio = linha.shift();
var pi = 3.14159;
var volume = (4.0 / 3) * pi * raio ** 3;

console.log("VOLUME = ", volume.toFixed(3));
