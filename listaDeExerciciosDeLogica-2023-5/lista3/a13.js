// Faça um programa que receba a temperatura média de cada mês do ano e armazene-as em uma lista. Após isto, calcule a média anual das temperaturas e mostre todas as temperaturas acima da média anual, e em que mês elas ocorreram (mostrar o mês por extenso: 1 – Janeiro, 2 – Fevereiro, . . . ).

const {entrada} = require('../funções.js')


let meses = [
  {mes: "janeiro", temp:0},
  {mes: "fevereiro", temp:0},
  {mes: "março", temp:0},
  {mes: "abril", temp:0},
  {mes: "maio", temp:0},
  {mes: "junho", temp:0},
  {mes: "julho", temp:0},
  {mes: "agosto", temp:0},
  {mes: "setembro", temp:0},
  {mes: "outubro", temp:0},
  {mes: "novembro", temp:0},
  {mes: "dezembro", temp:0}
], media = 0


entrada(12, meses, "mes ", 1, "temp")

for(i = 0; i<12; i++){
  media += Number(meses[i].temp)
}

media = media/12

console.log("\n")
for(i = 0; i<12; i++){
  if(Number(meses[i].temp) > media) console.log((i+1)+" - "+meses[i].mes+ " com "+ meses[i].temp+"°C")
}