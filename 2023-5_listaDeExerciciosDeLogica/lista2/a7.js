
console.log("7. Faça um programa que leia 5 números e informe o maior número.\n")



let n1 = Number(prompt("digite o numero 1:"))
let n2 = Number(prompt("digite o numero 2:"))
let n3 = Number(prompt("digite o numero 3:"))
let n4 = Number(prompt("digite o numero 4:"))
let n5 = Number(prompt("digite o numero 5:"))
let contador = (n1+n2+n3+n4+n5)

while(n1 < contador && n2 < contador && n3 < contador && n4 < contador && n5 < contador ){
  contador --
}

console.log(`o numero maior é: ${contador}`)