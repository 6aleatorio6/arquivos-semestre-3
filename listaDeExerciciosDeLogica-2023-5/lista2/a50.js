// 50. Sendo H= 1 + 1/2 + 1/3 + 1/4 + ... + 1/N, Faça um programa que calcula o valor de H com N termos.


let n = Number(prompt("N: "))

let soma = 0
for(i = 1;i<=n ; i++){
  soma += (1/i)
  // console.log(soma)
}

console.log(soma)

