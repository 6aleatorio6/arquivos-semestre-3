// 49 Faça um programa que mostre os n termos da Série a seguir:
// S = 1/1 + 2/3 + 3/5 + 4/7 + 5/9 + ... + n/m.
// Imprima no final a soma da série.

let t = Number(prompt("termos:"))
let n = 1, nant = 0, m = 0
let historico = []

for(i = 0; i<t; i++){
  m = nant+n
  historico.push({natual: n, nanntigo: nant, soma: m})
  nant = n
  n++
}

let paia = "", somapaia = 0
for(i = 0, junção = " + "; i<t; i++){
  if((i+1) == t) junção = "."
  paia += historico[i].natual+"/"+historico[i].soma+junção
  somapaia += historico[i].soma/historico[i].natual
}
console.log(paia)
console.log("soma dos m: "+somapaia)
