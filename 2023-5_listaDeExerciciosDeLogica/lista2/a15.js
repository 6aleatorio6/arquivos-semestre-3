console.log("15. A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.\n")

let ante = 0, atual = 1, soma = 0, r = "\nresultado: "


for(let i = 0; i<10; i++){
  r += atual+", "
  soma = atual+ante
  ante = atual
  atual = soma
  
  }
console.log(r)