  console.log("23Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.")
      let n = Number(prompt("insira um numero: "))
      let n1 = Math.floor(n)
      let res = n+" é um numero "

     if(n1 == n) res += "inteiro"
        else res += "decimal"

      console.log(res)