var input = require("fs").readFileSync("stdin", "utf-8");
var linha = input.split(" ")

var nomeVendedor = linha.shift();
var salary = parseFloat(linha.shift());
var totalVendas = parseFloat(linha.shift());

var somaSalario = (totalVendas * 0.15) + (salary);
console.log("TOTAL = R$ " + somaSalario.toFixed(2));