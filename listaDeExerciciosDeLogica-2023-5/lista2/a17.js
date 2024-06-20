console.log("17. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120 \n")

let num = Number(prompt("digite um número inteiro:")), f, num1 = num, rep = '='

for(let i = num; i>0; i--){
  if(i > 1) f = i-1
  num = (num*f)
  if(i > 1)rep += i+"."
     else rep += i
}

console.log(num1+"!"+rep+"="+num) 