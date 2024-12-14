console.log("29. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:\n\nLojas Quase Dois - Tabela de preços\n\nn1 - R$ 1.99\n2 - R$ 3.98\n\n")



let tabela = "TABELA DE PREÇOS:\n"


for(let i = 1; i<=25; i++){
  for(let j = 2; j>0; j--){

    let n = 0
    if(j == 2) n = i 
      else n = i+25

  tabela += n+" - "+(n*1.99).toFixed(2)+"      |      "
    
  }
  tabela += "\n"
}


console.log(tabela)