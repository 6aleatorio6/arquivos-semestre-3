 console.log("9. Faça um Programa que leia três números e mostre-os em ordem decrescente.")
      console.log("escolha 3 numeros")
      let n1 = Number(prompt('n1: '))
      let n2 = Number(prompt('n2: '))
      let n3 = Number(prompt('n3: '))

      if(n1>n2 && n1>n3){
      if(n2>n3) console.log(n1+", "+n2+", "+n3)
      else console.log(n1+", "+n3+", "+n2)
      }
      else if(n2>n1 && n2>n3){
      if(n1>n3) console.log(n2+", "+n1+", "+n3)
      else console.log(n2+", "+n3+", "+n1)
      }
      else if(n3>n2 && n3>n1){
      if(n2>n1) console.log(n3+", "+n2+", "+n1)
      else console.log(n3+", "+n1+", "+n2)}

      else ("n me diga que deu erro...")
