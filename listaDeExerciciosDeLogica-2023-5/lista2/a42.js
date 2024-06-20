console.log(" 42. Faça um programa que leia uma quantidade indeterminada de números positivos e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo.")


//para formatar saida em caixas
const  saida = require('../funções.js');
let bloco = []  
  //o que vai ter em cada linha
    let paia = [
      "[0-25] tem: ",
      "[26-50] tem: ",
      "[51-75] tem: ",
      "[76-100]  tem: "
    ]
//


let cont = 1
function entrada(){
  let paia = Number(prompt("N"+cont+": "))
  cont++
  return paia
}

let a = [0,0,0,0] 
for(let i = entrada(); i>=0; i = entrada()){
  if(i >= 0 && i<= 25) a[0]++
    else if(i >= 26 && i<= 50) a[1]++
    else if(i >= 51 && i<= 75) a[2]++
    else if(i >= 76 && i<= 100) a[3]++
}


console.log("\n quantos numeros estão no intervalo: ")
saida(bloco, 0, paia, 1, a[0], a[1], a[2], a[3])
saida(bloco, "stop", paia, 1)

