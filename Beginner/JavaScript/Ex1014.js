var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

//const [X, Y] = lines.shift().split(" ").map(Number);

const X = parseInt(lines.shift());
const Y = parseFloat(lines.shift());

console.log(lines, X, Y);

const consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`);

["-2.5 0.4", "12.1 7.3", ""];
