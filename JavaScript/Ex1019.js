const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const num = lines.map(Number).shift();

const hora = Math.floor(num / 3600);
const min = Math.floor((num % 3600) / 60);
const seg = Math.floor((num % 3600) % 60);
console.log(`${hora}:${min}:${seg}`);
