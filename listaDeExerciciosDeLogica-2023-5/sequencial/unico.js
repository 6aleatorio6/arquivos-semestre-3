// Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.


let tamanho = Number(prompt("tamanho em metros quadrados: "))

let tinta = tamanho/3
let latas = tinta/18
latas = latas.toFixed(0)
if(latas < 1) latas = 1
let money = latas*80

console.log("quantidade de lata: "+latas)
console.log("valot total: R$"+money)
console.log("\n")


