var input = require("fs").readFileSync("stdin", "utf-8");
var linha = input.split("\n")

console.log(linha)
var values1 = linha.shift().trim().split(" ")
console.log(values1)

var id1 = parseInt(values1.shift());
var amountItem1 = parseInt(values1.shift());
var priceItem1 = parseFloat(values1.shift())


var values2 = linha.shift().trim().split(" ");
console.log(values2);

var id2 = parseInt(values2.shift());
var amountItem2 = parseInt(values2.shift());
var priceItem2 = parseFloat(values2.shift());

var soma = (amountItem1 * priceItem1) + (amountItem2 * priceItem2)

console.log(`VALOR A PAGAR: R$ ${soma.toFixed(2)}`);

