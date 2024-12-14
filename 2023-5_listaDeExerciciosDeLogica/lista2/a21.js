console.log("21. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.\n")

let num = Number(prompt("digite um numero inteiro: ")), cont = 0


if(Number.isInteger(num)){

   for(let i = num; i>0; i--){
      if(num%i == 0 ) cont++
    }
    
    if(cont>2) console.log(`\no numero ${num} é composto`)
      else console.log(`\no numero ${num} é primo`)
}
  else console.log("funciona apenas com numero inteiro")


