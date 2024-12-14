// Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor impar. Imprima os três vetores.


//parte 1
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let par = [], impar = []

// const {entrada} = require('../funções.js')
// entrada(20, vetor, "a")

for(i = 0; i<20; i++){
  if(vetor[i]%2 == 0) par.push(vetor[i])
  else if(vetor[i]%2 != 0)impar.push(vetor[i])
}


//parte2
let totalgg = 0, pargg = 0, impargg = 0
for(i = 0; i<20; i++){
  totalgg += ","+vetor[i]
}

for(i = 0; i<par.length; i++){
  pargg += ","+par[i]
}

for(i = 0; i<impar.length; i++){
  impargg += ","+impar[i]
}




//parte3
console.log("todos os numeros: "+totalgg)
console.log("numeros pares: "+pargg)
console.log("numeros impares: "+impargg)