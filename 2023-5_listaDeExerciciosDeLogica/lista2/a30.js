console.log("30. O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:\n\nPreço do pão: R$ 0.18\n\nPanificadora Pão de Ontem - Tabela de preços\n1 - R$ 0.18\n2 - R$ 0.36\n\n")

let tabela = "\nTABELA DE PREÇOS DOS PAÊS:\n"


let preço = Number(prompt("preço do pão: "))

for(let i = 1; i<=25; i++){
  for(let j = 2; j>0; j--){

    let n = 0
    if(j == 2) n = i 
      else n = i+25

  tabela += n+" - "+(n*preço).toFixed(2)+"      |      "
    
  }
  tabela += "\n"
}


console.log(tabela)