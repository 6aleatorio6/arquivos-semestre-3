 console.log("20. Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:\n\nA mensagem Aprovado, se a média for maior ou igual a 7, com a respectiva \nmédia alcançada;\nA mensagem Reprovado, se a média for menor do que 7, com a respectiva \nmédia alcançada;\nA mensagem Aprovado com Distinção, se a média for igual a 10.")
      let n1 = Number(prompt("nota 1: "))
      let n2 = Number(prompt("nota 2: "))
      let n3 = Number(prompt("nota 3: "))
      let nf = (n1+n2+n3)/3
      let a 

      if(nf>=7 && nf<10) a = "aprovado"
        else if(nf<=7) a = "reprovado"
        else a = "aprovado com distinção"


      console.log("sua nota foi "+nf+" , você "+a)
      }