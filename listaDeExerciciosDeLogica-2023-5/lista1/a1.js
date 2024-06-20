      console.log("1. Faça um Programa que peça dois números e imprima o maior deles.")
      console.log("escolha 2 numeros")
      let n1 = Number(prompt('n1: '))
      let n2 = Number(prompt('n2: '))

      if(n1>n2)console.log(n1)
      else if(n2>n1)console.log(n2)
      else if(n2==n1)console.log("os numeros sao iguais")
      else console.log("invalido, use apenas numeros")