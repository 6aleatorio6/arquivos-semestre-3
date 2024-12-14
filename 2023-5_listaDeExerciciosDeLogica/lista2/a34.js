console.log("34. Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.\n")


let num = Number(prompt("digite um numero inteiro: "))

let cont = 0
for(let i = 1; i<=num/2; i++){
  if(num%i == 0) cont++
}

if(cont > 2) num += " é um numero composto"
  else num += " é um numero primo"

console.log(num)