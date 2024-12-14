// Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

const {entrada} = require('../funções.js')

let vetor = []
console.log("digite 10 caractere")
entrada(10, vetor, "caractere ", 0)

let consoantes = []
let a = ""

  
for(i = 0; i<10; i++){
  if(vetor[i].toLowerCase() == "a" || vetor[i].toLowerCase() == "e" || vetor[i].toLowerCase() == "i" || vetor[i].toLowerCase() == "o" || vetor[i].toLowerCase() == "u") consoantes.push(vetor[i])
}

console.log("foram lidas "+consoantes.length+" consoantes")
for(i = 0; i< consoantes.length; i++){
  a += consoantes[i]+" "
}
console.log("consoantes: "+a)