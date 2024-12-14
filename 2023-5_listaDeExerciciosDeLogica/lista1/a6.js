    console.log("6. Faça um Programa que leia três números e mostre o maior deles.")
      
console.log("escolha 2 numeros")
      let n1 = Number(prompt('n1: '))
      let n2 = Number(prompt('n2: '))
      let n3 = Number(prompt('n3: '))

      if(n1>n2 && n1>n3)console.log(n1)
      else if(n2>n1 && n2>n3)console.log(n2)
      else console.log(n3)
