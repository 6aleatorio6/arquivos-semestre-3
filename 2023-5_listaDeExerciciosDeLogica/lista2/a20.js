console.log("20. Altere o programa de calculado do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.\n")


let funfa = 's'

while(funfa == 's'){
  console.log("\n")
  let num = Number(prompt("digite um número inteiro:"))
  let f, num1 = num, rep = '='
  
  if(num >=0 && num<16 && Number.isInteger(num)){  
      for(let i = num; i>0; i--){
        if(i > 1) f = i-1
        num = (num*f)
        if(i > 1)rep += i+"."
          else rep += i
      }
      console.log(num1+"!"+rep+"="+num) 
      console.log("\n")
      funfa = prompt("deseja saber a fatorial de outro numero? s/n")      
    }

    else console.log("digite números inteiros positivos e menores que 16.")
   
  }