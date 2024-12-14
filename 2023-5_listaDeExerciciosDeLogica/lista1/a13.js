console.log("13. Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.")
      
      console.log("digite um dia da semana em numero(1-7)")
      let d = Number(prompt("digite o numero: "))

      if(d == 1)console.log("Domingo")
        else if(d == 2)console.log("segunda")
        else if(d == 3)console.log("terça")
        else if(d == 4)console.log("quarta")
        else if(d == 5)console.log("quinta")
        else if(d == 6)console.log("sexta")
        else if(d == 7)console.log("sabado")
        else console.log("invalido")