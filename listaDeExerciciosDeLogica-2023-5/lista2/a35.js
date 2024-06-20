console.log("35. Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário\n")


let num = Number(prompt("numero inteiro: "))
let contador = "\nprimos entre 1 e "+num+": "

for(let i = 1; i<=num; i++){

  let cont = 0
  for(let j = 1; j<=i/2; j++){
    if(i%j == 0) cont++
  }
  
  if(cont < 3) contador += i+" "
}

console.log(contador)