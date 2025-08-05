const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const idade = lines.map(Number).shift();
const anos = Math.floor(idade / 365);
const mes = Math.floor((idade % 365) / 30);
const dia = Math.floor((idade % 365) % 30);

console.log(`${anos} ano(s) \n${mes} mes(es) \n${dia} dia(s)`);
