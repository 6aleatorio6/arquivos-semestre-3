


console.log("10. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.\n")



let n1 = Number(prompt("n1:"))
let n2 = Number(prompt("n2:"))
let f1 = 0, f2 = 0, r = "numeros: "

if(n1>n2) {f1 = n1; f2 = n2}
  else {f1 = n2; f2 = n1}

while(f1>=f2){
  if(f2<(f1-1)) r += f2+', '
    else if(f2<=(f1-1)) r += f2+' e '
    else r += f2 
  f2++
}

console.log(r)



