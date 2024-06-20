console.log("12. Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.\n\nDesconto do IR:\n\nSalário Bruto até 900 (inclusive) - isento\n\nSalário Bruto até 1500 (inclusive) - desconto de 5%\n\nSalário Bruto até 2500 (inclusive) - desconto de 10%\n\nSalário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.")
      console.log("informações para calcular seu salario\n")
      let h = Number(prompt("quantas horas voce trabalha por mes? "))
      let gh = Number(prompt("quanto vale sua hora? R$:"))
      let sb = h*gh
      let ir = 0
      let inss = 0
      let fgts = 0
      let sin = 0


      if(sb<=900 && sb>=0){
        ir = 0
        inss = 10
        fgts = 11
        sin = 3
        console.log("Salário Bruto: ("+gh+"*"+h+")   : R$"+sb)
        console.log("(-) IR ("+ir+"%)           : R$"+ir*sb/100)
        console.log("(-) INSS ("+inss+"%)         : R$"+inss*sb/100)
        console.log("(-) SINDICATO ("+sin+"%)         : R$"+sin*sb/100)
        console.log("FGTS ("+fgts+"%)           : R$"+fgts*sb/100)
        console.log("Total de descontos       : R$"+((inss*sb/100)+(ir*sb/100)+(sin*sb/100)))
        console.log("Salário Liquido          : R$"+(sb-((inss*sb/100)+(ir*sb/100))))}

      else if(sb<=1500 && sb>900){
        ir = 5
        inss = 10
        fgts = 11
        sin = 3
        console.log("Salário Bruto: ("+gh+"*"+h+")   : R$"+sb)
        console.log("(-) IR ("+ir+"%)           : R$"+ir*sb/100)
        console.log("(-) SINDICATO ("+sin+"%)         : R$"+sin*sb/100)
        console.log("(-) INSS ("+inss+"%)         : R$"+inss*sb/100)
        console.log("FGTS ("+fgts+"%)             : R$"+fgts*sb/100)
        console.log("Total de descontos       : R$"+((inss*sb/100)+(ir*sb/100)+(sin*sb/100)))
        console.log("Salário Liquido          : R$"+(sb-((inss*sb/100)+(ir*sb/100))))}

      else if(sb<=2500 && sb>1500){
        ir = 10
        inss = 10
        fgts = 11
        sin = 3
        console.log("Salário Bruto: ("+gh+"*"+h+")   : R$"+sb)
        console.log("(-) SINDICATO ("+sin+"%)         : R$"+sin*sb/100)
        console.log("(-) IR ("+ir+"%)           : R$"+ir*sb/100)
        console.log("(-) INSS ("+inss+"%)         : R$"+inss*sb/100)
        console.log("FGTS ("+fgts+"%)             : R$"+fgts*sb/100)
        console.log("Total de descontos       : R$"+((inss*sb/100)+(ir*sb/100)+(sin*sb/100)))
        console.log("Salário Liquido          : R$"+(sb-((inss*sb/100)+(ir*sb/100))))}

      else if(sb>2500){
        ir = 20
        inss = 10
        fgts = 11
        sin = 3
        console.log("Salário Bruto: ("+gh+"*"+h+")   : R$"+sb)
        console.log("(-) SINDICATO ("+sin+"%)         : R$"+(sin*sb/100))
        console.log("(-) IR ("+ir+"%)           : R$"+ir*sb/100)
        console.log("(-) INSS ("+inss+"%)         : R$"+inss*sb/100)
        console.log("FGTS ("+fgts+"%)             : R$"+fgts*sb/100)
        console.log("Total de descontos       : R$"+((inss*sb/100)+(ir*sb/100)+(sin*sb/100)))
        console.log("Salário Liquido          : R$"+(sb-((inss*sb/100)+(ir*sb/100))))}

      else console.log("invalido")