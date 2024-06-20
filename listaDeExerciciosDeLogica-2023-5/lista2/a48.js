console.log("48. Faça um programa que peça um número inteiro positivo e em seguida mostre este número invertido.\nExemplo:\n12376489\n=> 98467321\n\n/////////\n")

let n = (prompt("paia: ")).toString()
// let n = "123"
let saida = ""


for(i = n.length; i>0; i--){
  saida += (n.slice(-1, n.length))
  n = n.substr(0, (n.length-1))
}

console.log(saida)