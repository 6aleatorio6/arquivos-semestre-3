console.log("14. Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:\n\nMédia de Aproveitamento\n\nEntre 9.0 e 10.0 : A\nEntre 7.5 e 9.0 : B\nEntre 6.0 e 7.5 : C\nEntre 4.0 e 6.0 : D\nEntre 4.0 e zero : E\nO algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.")
      
      console.log("digite as duas notas parciais")
      let n1 = Number(prompt("nota 1: "))
      let n2 = Number(prompt("nota 2: "))
      let n0 = (n1+n2)/2

      console.log("\nnota 1: "+n1+" \nnota 2: "+n2+" \nmédia: "+n0+"\ncalculo: ("+n1+"+"+n2+")/2")

      if(n0>=6){
      console.log("APROVADO");
      if(n0<=10 && n0>=9)console.log("nota: A");
        else if(n0<9 && n0>=7.5)console.log("nota: B");
        else if(n0<7.5 && n0>=6)console.log("nota: C");
        else console.log("erro")}

      else if(n0<6){
        console.log("REPROVADO")
        if(n0<6 && n0>=4)console.log("nota: D")
      else if(n0<4)console.log("nota: E")
      else console.log("erro")}

      else console.log("erro")