console.log("18. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.\n")

let funfa = Number(prompt("deseja adicionar quantos numeros no conjunto? "))
let nnumber = 0, maior = 0, menor = 0, soma = 0, cont = 0

for(let i = funfa; i>0; i-- ){
  cont++
  nnumber = Number(prompt("n"+cont))
  
  if(cont == 1) menor =nnumber
  
  if(nnumber > maior) maior = nnumber

  if(nnumber < menor) menor = nnumber
  
  soma += nnumber
}

console.log("\nmaior: "+maior+"\nmenor: "+menor+"\n soma: "+soma)
  
