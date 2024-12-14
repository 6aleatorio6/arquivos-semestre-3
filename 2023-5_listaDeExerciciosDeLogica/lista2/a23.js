console.log("23. Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deve mostrar também o número de salas que ele executou para encontrar os números primos. Serão testados o funcionamento, o estilo e o número de testes (divisões) executados.\n")


let n = Number(prompt("digite o numero N:"))

let primos = ": ", p = 0

for(j = n; j>0; j--){
  let cont = 0
  
  for(let i = j; i>0; i--){    
    if(j%i == 0 ) cont++
    }
    
  if(cont<3) {primos += j+" "; p++}
}
      

     
    


console.log(`o numero ${n} tem no total ${p} primos, sendo eles${primos}`)