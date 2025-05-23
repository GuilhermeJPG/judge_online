var input = require("fs").readFileSync("stdin", "utf-8");
var linhas = input.split("\n");

var [A, B, C] = linhas.map(Number);
var pi = 3.14159;

console.log(A, B, C);

var triangulo = (A * C) / 2;
var circulo = pi * C ** 2;
var trapezio = ((A + B) * C) / 2;
var quadrado = B ** 2;
var retangulo = A * B;

console.log(
  `TRIANGULO: ${triangulo.toFixed(3)}\nCIRCULO: ${circulo.toFixed(
    3
  )}\nTRAPEZIO: ${trapezio.toFixed(3)}\nQUADRADO: ${quadrado.toFixed(
    3
  )}\nRETANGULO: ${retangulo.toFixed(3)}`
);
