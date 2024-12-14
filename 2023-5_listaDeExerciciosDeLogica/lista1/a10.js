  console.log("10. Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem Bom Dia!, Boa Tarde! ou Boa Noite! ou Valor Inválido!, conforme o caso.")
      console.log("em que turno voce estuda?\n(M-matutino ou V-Vespertino ou N- Noturno)")
      let t = prompt("seu turno: ")

      if (t.toUpperCase() == 'M'){console.log("bom dia!")}
        else if(t.toUpperCase() == 'V'){console.log("boa tarde!")}
        else if(t.toUpperCase() == 'N'){console.log("boa noite!")}
        else console.log("Valor Inválido!")
