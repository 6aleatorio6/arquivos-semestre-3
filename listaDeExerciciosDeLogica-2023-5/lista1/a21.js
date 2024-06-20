console.log("21. Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.\n\nExemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma \nnota de 1;\nExemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, \numa nota de 5 e quatro notas de 1.")
      //uma aberração de código. tinha ido fazer sem vontade
      let n1 = prompt("digite o valor do saque: R$" )
      if(n1>=10 && n1<=600) n1 = Number(n1)
      else n1 = "a"

      let cen = (n1/100-(n1%100/100))
      let dez = ((n1%100)-(n1%10))/10
      let uni = n1%10
      let e, resultado

      console.log(cen, dez , uni)

      {if(cen == 0) cen = ""
        else if(cen == 1) cen = "uma nota de 100"
        else if(cen == 2) cen = "duas notas de 100"
        else if(cen == 3) cen = "tres notas de 100"
        else if(cen == 4) cen = "quatro notas de 100"
        else if(cen == 5) cen = "cinco notas de 100"
        else if(cen == 6) cen = "seis notas de 100"}
      
      {if(dez == 0) dez = ""
        else if(dez == 1) dez = "uma nota de 10"
        else if(dez == 2) dez = "duas notas de 10"
        else if(dez == 3) dez = "tres notas de 10"
        else if(dez == 4) dez = "quatro notas de 10"
        else if(dez == 5) dez = "uma nota de 50"
        else if(dez == 6) dez = "uma nota de 50 e uma de 10"
        else if(dez == 7) dez = "uma nota de 50 e duas de 10 "
        else if(dez == 8) dez = "uma nota de 50 e tres de 10 "
        else if(dez == 9) dez = "uma nota de 50 e quatro de 10"}

      {if(uni == 0) uni = ""
        else if(uni == 1) uni = " e uma nota de 1"
        else if(uni == 2) uni = " e duas notas de 1"
        else if(uni == 3) uni = " e tres notas de 1"
        else if(uni == 4) uni = " e quatro notas de 1"
        else if(uni == 5) uni = " e uma nota de 5"
        else if(uni == 6) uni = " e uma nota de 5 e uma de 1"
        else if(uni == 7) uni = " e uma nota de 5 e duas de 1"
        else if(uni == 8) uni = " e uma nota de 5 e tres de 1"
        else if(uni == 9) uni = " e uma nota de 5 e quatro de 1"}

      if(dez == "" || cen == "") e = ""
        else e = " e "

      let erro = "invalido"

      resultado = "Para sacar a quantia de "+n1+" reais, o programa fornece "+cen+e+dez+uni+"."


    if(n1 == "a")console.log(erro)
      else console.log(resultado)
      
      }