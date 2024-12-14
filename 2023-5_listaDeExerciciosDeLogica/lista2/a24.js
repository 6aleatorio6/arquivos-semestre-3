console.log("24. Faça um programa que calcula o mostre a média aritmética de N notas.")

let qntN = Number(prompt("quantas notas deseja calcular? "))
let soma = 0, notaF = 0,  cont = 0
console.log("\n")

for(let i = qntN; i>0; i--){
  
  cont++
  soma += Number(prompt(`nota ${cont}: `))
}

notaF = soma/qntN

console.log(`\na média do aluno é: ${notaF.toFixed(2)}`)