console.log("16. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.\n")

let ante = 0, atual = 1, soma = 0, r = "\nresultado: "


while(ante < 500){
  r += atual+", "
  soma = atual+ante
  ante = atual
  atual = soma
  }
console.log(r)