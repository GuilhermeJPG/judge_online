const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const distancia = lines.shift();

const tempo = distancia * 2;

console.log(`${tempo} minutos`);
