 console.log("8. Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.")
      
      console.log("escolha 2 numeros")
      let p1 = Number(prompt("produto 1: "))
      let p2 = Number(prompt("produto 2: "))
      let p3 = Number(prompt("produto 3: "))

      if(p1<=p2 && p1<=p3)console.log("compre o produto " + p1)
      else if(p2<=p1 && p2<=p3)console.log("compre o produto " +p2)
      else if(p3<=p2 && p3<=p1)console.log("compre o produto " +p3)
      else console.log("todos tem o mesmo preço")
