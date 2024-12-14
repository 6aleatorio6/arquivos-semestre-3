console.log("1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.\n")


let nota = Number(prompt("digite sua nota"))

while (nota < 0 || nota > 10) {
  console.log("a nota " + nota + " é invalida! a nota só sera valida se for entre 1-10")
  nota = Number(prompt("digite a nota novamente. 1-10"))
}

console.log("a nota " + nota + " é valida")