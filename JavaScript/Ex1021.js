const { match } = require("assert");

const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const valor = parseFloat(lines.shift());
const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
let valorRestante = valor;

console.log(valor);
console.log("NOTAS:");
for (let i = 0; i < notas.length; i++) {
  const notaAtual = notas[i];
  const quantasNotas = Math.floor(valorRestante / notaAtual);

  valorRestante = valorRestante % notaAtual;

  console.log(`${quantasNotas} nota(s) de R$ ${notaAtual}.00`);
}
console.log("MOEDAS:");
for (let i = 0; i < moedas.length; i++) {
  const moedaAtual = moedas[i];
  const quantidadesMoedas = Math.floor(valorRestante / moedaAtual);

  valorRestante = valorRestante % moedaAtual;

  valorRestante = Math.round(valorRestante * 100) / 100;

  console.log(`${quantidadesMoedas} moeda(s) de R$ ${moedaAtual.toFixed(2)}`);
}
