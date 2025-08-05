const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const consumoMedio = 12;

const tempo = lines.shift();
const velocidade = lines.shift();

const distancia = tempo * velocidade;
const litros = distancia / consumoMedio;

console.log(litros.toFixed(3));
