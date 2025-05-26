var input = require("fs").readFileSync("stdin", "utf-8");
var linhas = input.split("\n");

var [A, B, C] = linhas.shift().split(" ").map(Number);

console.log(A, B, C);

const maiorAB = (A + B + Math.abs(A - B)) / 2;

const maior = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(`${maior} eh o maior`);
