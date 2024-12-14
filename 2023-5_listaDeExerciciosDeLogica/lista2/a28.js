console.log("28. Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em cada um.\n")

let qnt = Number(prompt("quantos CDs tem em sua coleção? "))
let soma = 0

console.log("\n")
for(let i = qnt; i>0; i--){

  let vCD = Number(prompt(`quantas reais custou o CD ${i}: `))
  soma += vCD
}

let média = soma/qnt

console.log(`\RESULTADO:\n valor total investido na coleção: ${soma}\n gasto médio por CD ${média.toFixed(2)}`)