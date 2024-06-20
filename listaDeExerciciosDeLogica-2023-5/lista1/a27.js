 console.log("27. Uma fruteira está vendendo frutas com a seguinte tabela de preços:\n\nAté 5 Kg:\nMorango R$ 2,50 por Kg Maçã R$ 1,80 por Kg\n\nAcima de 5 Kg:\nMorango R$ 2,20 por Kg\n\nMaçã R$ 1,50 por Kg\n\nSe o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a qu\nantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.")
      let kga = 0, kgo = 0, valormo, valorma, kg, desconto
      console.log("s ou n")
      let ma = prompt("deseja comprar maçã?")
      if(ma == 's') kga = Number(prompt("quantos kg de maçã? "))
      let mo = prompt("deseja comprar morangos?")
      if(mo == 's') kgo = Number(prompt("quantos kg de morangos? "))


      if(kgo <= 5) valormo = kgo*2.50
        else valormo = kgo*2.20

      if(kga <=5) valorma = kga*1.80
        else valorma = kga*1.50

      valor = valormo + valorma
      kg = kgo + kga

      if(kg>8 || valor > 25) desconto = (valor*0.10)
        else desconto = 00,00
      valor = valor-desconto
  
      console.log("\n")
      if(ma == 's') console.log(""+kga+"kg de maçãs ficou no valor de: R$"+valorma)
      if(mo == 's') console.log(kgo+"kg de morangos ficou no valor de: R$"+valormo)
      console.log("valor do desconto: R$"+desconto)
      console.log("\no valor de sua compra foi de R$"+valor)
