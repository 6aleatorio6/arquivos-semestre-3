 console.log("28. O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:\n\nAté 5 Kg:\nFile Duplo R$ 4,90 por Kg\nAlcatra R$ 5,90 por Kg\nPicanha R$ 6,90 por Kg\n\nAcima de 5 Kg:\nFile Duplo R$ 5,80 por Kg\nAlcatra R$ 6,80 por Kg\nPicanha R$ 7,80 por Kg\n\nPara atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita \nno cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um \ncupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.")
      console.log("Escolha apenas um desses: \n(F)File Duplo \n(A)Alcatra \n(P)Picanha")

      let es = prompt("")
      let kg = Number(prompt("quantos kg? "))
      let valor, cartao, desconto = 0, f = "File duplo", a = "Alcatra", p = "Picanha", pag = "em dinheiro"
  

      if(kg <= 5){
        if(es.toLowerCase() == f) valor = 4.90*kg, es = f
          else if(es.toLowerCase == a) valor = 5.90*kg, es = a
          else valor = 6.90*kg, es = p
      }
      else{    
        if(es.toLowerCase() == f) valor = 5.80*kg, es = f
          else if(es.toLowerCase() == a) valor = 6.80*kg, es = a
          else valor = 7.80*kg, es = p}
  
      cartao = prompt("a compra vai ser feita no cartão Tabajara? (s ou n)")
      if(cartao.toLowerCase() == 's'){
      desconto = valor*0.05
      valor = (valor-desconto)
      pag = "no cartao tabajara"}

      console.log("\ncupom fiscal \n")
      console.log("tipo da carne:         "+es)
      console.log("quantidade de carne:   "+kg+"kg de "+es)
      console.log("tipo de pagamento:     "+pag)
      console.log("valor do desconto:     "+desconto.toFixed(2))
      console.log("valor a pagar:         "+valor.toFixed(2))