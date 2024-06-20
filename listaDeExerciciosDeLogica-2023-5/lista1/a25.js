 console.log("25 Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:\n\nTelefonou para a vítima?\nEsteve no local do crime?\nMora perto da vítima?\nDevia para a vítima?\nJá trabalhou com a vítima?\nO programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder \npositivamente a 2 questões ela deve ser classificada como Suspeita, entre 3 e 4 como Cúmplice e 5 como Assassino. \nCaso contrário, ele será classificado como Inocente.")
      console.log("responda com s ou n")
      let a = prompt("Telefonou para a vítima?")
      let b = prompt("Esteve no local do crime?")
      let c = prompt("Mora perto da vítima?")
      let d = prompt("Devia para a vítima?")
      let e = prompt("Já trabalhou com a vítima?")
  
      if(a == "s") a = 1
        else a = 0

      if(b == "s") b = 1
        else b = 0

      if(c == "s") c = 1
        else c = 0

      if(d == "s") d = 1
        else d = 0

      if(e == "s") e = 1
        else e = 0

      let con = a+b+c+d+e
      let res = "\n o réu é "

      if(con == 2) res+="suspeito"
        else if(con == 3 || con == 4)res+="cúmplice"
      
      else if(con == 5)res+="um assasino"
      
      else res+="inocente"

      console.log(res)