
console.log("8. Faça um programa que leia 5 números e informe a soma e a média dos números.\n")




let funfa = 1

while(funfa == 1){
 n1 = Number(prompt("digite a nota 1:"))
 n2 = Number(prompt("digite a nota 2:"))
 n3 = Number(prompt("digite a nota 3:"))
 n4 = Number(prompt("digite a nota 4:"))
 n5 = Number(prompt("digite a nota 5:"))

  if(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10 || n5 < 0 || n5 > 10) console.log("nota valida apenas de 1-10")
    else funfa = 0
}

let soma = (n1+n2+n3+n4+n5)
let media = soma/5

console.log(`a soma de sua nota deu ${soma} com media de ${media}`)

