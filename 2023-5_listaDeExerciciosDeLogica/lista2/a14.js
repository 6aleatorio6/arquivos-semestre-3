

console.log("14. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números impares.\n")

let funfa = 1
let n = 0
// while(funfa == 1){
//   let n1 = Number(prompt("n1"))
//   let n2 = Number(prompt("n2"))
//   let n3 = Number(prompt("n3"))
//   let n4 = Number(prompt("n4"))
//   let n5 = Number(prompt("n5"))
//   let n6 = Number(prompt("n6"))
//   let n7 = Number(prompt("n7"))
//   let n8 = Number(prompt("n8"))
//   let n9 = Number(prompt("n9"))
//   let n10 = Number(prompt("n10"))
//   n = n1+n2+n3+n4+n5+n6+n7+n8+n9+n10
//   if(Number.isInteger(n)){console.log("entrada valida\n"); funfa = 0}
//     else console.log("escreva apenas numeros inteiros")
// }

let p = 0, nt=0
for(let paia = 10; paia>0; paia--){
  funfa = 1
  p++
  while(funfa == 1){ 
    nt = Number(prompt("n"+p+": "))
    if(Number.isInteger(nt)) {funfa = 0; n += nt}
      else console.log("apenas numeros inteiros. escreva novamente:")
    
    
  }
}

let par = 0, soma = 0
for(let i = n; i>0; i--){
  soma++
  if(i%2 == 0) par++    
}

let impar = soma-par


console.log("\nsoma dos numeros: "+soma+"\npar: "+par+"\nimpar: "+impar)