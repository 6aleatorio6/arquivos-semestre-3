console.log("18. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.\n")

let funfa = Number(prompt("deseja adicionar quantos numeros no conjunto? "))
let nnumber = 0, maior = 0, soma = 1, cont = 0, funfa0, nnumber0 = 0, menor = 1111

for(let i = funfa; i>0; i-- ){
  cont++

  funfa0 = 1
  while(funfa0 == 1){                                    
    nnumber0 = Number(prompt("n"+cont))
    if(nnumber0<0 || nnumber0>1000) console.log("\ninvalido! numero apenas de 1-1000. digite o n"+cont+" novamente")
      else { funfa0 = 0; nnumber = nnumber0}
  }
  

  if(nnumber > maior) maior = nnumber
    
  if(nnumber < menor) menor = nnumber
  
  soma += nnumber
}

console.log("\nmaior: "+maior+"\nmenor: "+menor+"\n soma: "+soma)
  
