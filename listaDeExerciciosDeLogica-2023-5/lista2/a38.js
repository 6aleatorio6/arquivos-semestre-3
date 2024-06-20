console.log("38. Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:\nEsse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;\nEm 1996 recebeu aumento de 1,5% sobre seu salário inicial;\nA partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. Faça um programa que \ndetermine o salário atual desse funcionário. Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do \nfuncionário.\n")

function sala(anoinicial, anoatual, porcentagem, salainicial){
  let cont = 0
  
  for(let i = anoinicial; i<anoatual; i++){ cont++ }
  
  porcentagem = porcentagem*cont
  
  let salaatual = salainicial+(salainicial*porcentagem)
  return console.log("\nsalario atual: "+salaatual)
}

let salario = Number(prompt("salario incial: "))
sala(1995, 2023, 0.015, salario)