console.log("41. Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.\n\nOs juros e aquantidade de parcelas seguem a tabela abaixo:\n\nQuantidade de Parcelas % de Juros sobre o valor inicial da dívida\n\n1 0\n\n3 10\n\n6 15\n\n9 20\n\n12 25\n\nExemplo de saída do programa:\n\nValor da Dívida -Valor dos Juros - Quantidade de Parcelas - Valor da Parcela\n\nR$ 1.000,00 - 0 - 1 - R$ 1.000,00\nR$1.100,00 - 100 - 3 - R$ 366,00\nR$ 1.150,00 - 150 - 6 - R$ 191,67\n //////////////////////////////\n")

//para formatar saida em caixas
const  {saida} = require('../funções.js');
let bloco = []  
  //o que vai ter em cada linha
    let paia = [
      "qnt de parcelas: ",
      " valor da divida: ",
      " valor dos juros: ",
      " valor das parcelas: "
    ]
//


let divida = Number(prompt("sua divida:"))
let vD = 0, vJ = 0, vP = 0, aux = 1

for(let i = 1, parc = 1, juros = 0; i<=5 ; parc = i*3, i++, juros += 0.05){
  vJ = divida*juros
  vD = divida+vJ
  vP = vD/parc
  if(i == 1) juros = 0.05
  
  
  // if(i == 1) saida(bloco, 0, paia, 1, "pagando à vista", vD.toFixed(2), vJ.toFixed(2), vP.toFixed(2))
  if(i == 3 || i == 5) aux++
  saida(bloco, 0, paia, aux, parc, vD.toFixed(2), vJ.toFixed(2), vP.toFixed(2))
}



saida(bloco, "stop", paia, 3)