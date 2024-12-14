 console.log("15. Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno. Dicas:\n\nTrês lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;\nTriângulo Equilátero: três lados iguais;\nTriângulo Isósceles: quaisquer dois lados iguais;\nTriângulo Escaleno: três lados diferentes;")
      console.log("digite as duas notas parciais")
      let n1 = Number(prompt("lado 1: "))
      let n2 = Number(prompt("lado 2: "))
      let n3 = Number(prompt("lado 3: "))

      if((n1+n2) == n3 || (n1+n3) == n2 || (n2+n3) == n1){console.log("é um triangulo")}
      else if(n1==n2 && n2==n3) console.log("Triângulo Equilátero")
      else if(n1!=n2 && n2!=n3) console.log("Triângulo Escaleno")
      else console.log("Triângulo Isósceles")