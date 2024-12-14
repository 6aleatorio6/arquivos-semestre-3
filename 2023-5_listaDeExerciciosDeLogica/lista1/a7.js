
      console.log("7. Faça um Programa que leia três números e mostre o maior e o menor deles.")
      
      console.log("escolha 2 numeros")
      let n1 = Number(prompt('n1: '))
      let n2 = Number(prompt('n2: '))
      let n3 = Number(prompt('n3: '))

      console.log("o maior é")
      if(n1>n2 && n1>n3)console.log(n1)
        else if(n2>n1 && n2>n3)console.log(n2)
        else console.log(n3)

      console.log("o menor é")
      if(n1<n2 && n1<n3)console.log(n1)
      else if(n2<n1 && n2<n3)console.log(n2)
      else console.log(n3)
      