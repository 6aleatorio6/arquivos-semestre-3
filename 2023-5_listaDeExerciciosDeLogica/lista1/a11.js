 console.log("11. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.\n\nFaça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:\n\nsalários até R$ 280,00 (incluindo) : aumento de 20%\nsalários entre R$ 280,00 e R$ 700,00 : aumento de 15%\nsalários entre R$ 700,00 e R$ 1500,00 : aumento de 10%\nsalários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:\no salário antes do reajuste;\no percentual de aumento aplicado;\no valor do aumento;\no novo salário, após o aumento.")
      console.log("qual é o seu salario?")
      let s = Number(prompt("R$: "))

      if(s<=280){
        console.log("valor antes do reajuste: R$"+s)
        console.log("percentual aumentado: 20%")
        console.log("o valor do aumento: R$"+(s*20/100))
        console.log("seu novo salario é: R$" + ((s*20/100)+s))}

      else if(s>280 && s<=700){ console.log("valor antes do reajuste: R$"+s)
        console.log("percentual aumentado: 15%")
        console.log("o valor do aumento: R$"+(s*15/100))
        console.log("seu novo salario é: R$" + ((s*15/100)+s))}

      else if(s>700 && s<=1500){ console.log("valor antes do reajuste: R$"+s)
        console.log("percentual aumentado: 10%")
        console.log("o valor do aumento: R$"+(s*10/100))
        console.log("seu novo salario é: R$" + ((s*10/100)+s))}

      else if(s>1500){ console.log("valor antes do reajuste: R$"+s)
        console.log("percentual aumentado: 5%")
        console.log("o valor do aumento: R$"+(s*5/100))
        console.log("seu novo salario é: R$" + ((s*5/100)+s))}

      else console.log("invalido")