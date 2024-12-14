      console.log("5. Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:\n\nA mensagem Aprovado, se a média alcançada for maior ou igual a sete;\nA mensagem Reprovado, se a média for menor do que sete;\nA mensagem Aprovado com Distinção, se a média for igual a dez.")
      

      console.log("escolha 2 numeros")
      let n1 = Number(prompt('nota 1: '))
      let n2 = Number(prompt('nota 2: '))


      let r = ((n2+n1)/2)

      if(r==10)console.log("aprovado com distinção")
        else if(r<7)console.log("reprovado")
        else console.log("aprovado")

      
      }