   console.log("26. Um posto está vendendo combustíveis com a seguinte tabela de descontos: Álcool:\n\naté 20 litros, desconto de 3% por litro\nacima de 20 litros, desconto de 5% por litro Gasolina:\naté 20 litros, desconto de 4% por litro\nacima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-\nálcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.")
      console.log("A-álcool ou G-gasolina")
      let c = prompt("qual combustivel deseja?")
      let l = Number(prompt("quantos litros"))
      let vg = l*2.50
      let va = l*1.90
      let cc, rs
  
      if(c.toUpperCase() == 'G'){
          cc = "Gasolina"
          if(l>20) rs = vg-(vg*0.05)
           else rs = vg-(vg*0.03)
        }
        else{
          cc = "álcool"
          if(l>20) rs = va-(va*0.06)
          else rs = va-(va*0.04)
      }
 
      console.log("o valor a ser pago por "+l+" litros de "+cc+" é R$"+(rs).toFixed(2))