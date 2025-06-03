//["-2.5 0.4", "12.1 7.3", ""];
const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

console.log(lines);

const p1 = lines.shift();
const [x1, y1] = p1.split(" ");

const p2 = lines.shift();
const [x2, y2] = p2.split(" ");

console.log(x1, y1, x2, y2);

const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(distancia);
