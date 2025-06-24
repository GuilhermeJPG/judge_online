const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const valor = lines.map(Number).shift();
const denominador = [100, 50, 20, 10, 5, 2, 1];
let valorRestante = valor;

console.log(valor);

for (let i = 0; i < denominador.length; i++) {
  const notaAtual = denominador[i];
  const quantasNotas = Math.floor(valorRestante / notaAtual);

  valorRestante = valorRestante % notaAtual;

  console.log(`${quantasNotas} nota(s) de R$ ${notaAtual},00`);
}
