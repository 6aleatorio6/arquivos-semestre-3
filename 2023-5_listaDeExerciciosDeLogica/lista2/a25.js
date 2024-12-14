console.log("25. Faça um programa que peça para n pessoas a sua idade, ao final o programa deve verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulto ou idoso, conforme a média.\n")

let qntP = Number(prompt("quantidade de pessoas: ")), cont = 0, idadefin = 0, turma = 0, idade = 0

console.log("\n")
for(let i = qntP; i>0; i--){
  cont++
  idade += Number(prompt(`qual a idade da pessoa ${cont}? `))
}

idadefin = idade/qntP


if(idadefin>= 0 && idadefin<26) turma = "é jovem"
  else if(idadefin<=60) turma = "é adulta"
  else turma = "é idosa"

console.log(`a turma ${turma}`)