console.log("36. Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:\n\nMontar a tabuada de: 5\nComeçar por: 4\nTerminar em: 7\n\nObs: Você deve verificar se o usuário não digitou o final menor que o inicial.\n\n")

let tabu = Number(prompt("Montar a tabuada de: "))
let inicio = Number(prompt("começar por: "))
let fim = inicio-1

while(fim < inicio){
  fim = Number(prompt("terminar em: "))
  if(fim < inicio) console.log(" o final não pode ser menor que o inicial.")
}




for(let i = inicio; i<=fim; i++){
  console.log(`${tabu} X ${i} = ${i*tabu}`)
}