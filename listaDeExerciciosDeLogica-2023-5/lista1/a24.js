    console.log("Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:\n\npar ou ímpar;\npositivo ou negativo;\ninteiro ou decimal.")
      console.log("digite 2 numeros")
      let n1 = Number(prompt("digite o n1 "))
      let n2 = Number(prompt("digite o n2 "))
      let op = prompt("qual operação deseja fazer? (/,*,-,+ ou ** se for potenciação e // se for raiz)")
      let r, p, con, a, b, c

      if(op == "/") p = n1/n2
        else if(op == "*") p = n1*n2
        else if(op == "-") p = n1-n2
        else if(op == "+") p = n1+n2
        else if(op == "**") p = n1**n2
        else if(op == "//") p = n1**(1/n2)
  
      if((p%2) == 0) c = " par"
      else c = " impar"

      if(p>=0) b = "positivo"
        else b = "negativo"


      if(p == (Math.floor(p))) a = "inteiro"
        else a = "decimal"

      con = "\n"+n1+op+n2+":"+p+" \n"+p+" é um numero "+a+" "+b+", ele é um numero "+c

        console.log(con)