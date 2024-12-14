console.log("11. Altere o programa anterior para mostrar no final a soma dos números.\n")




let n1 = Number(prompt("n1:"))
let n2 = Number(prompt("n2:"))
let f1 = 0, f2 = 0, r = "numeros: "

if(n1>n2) {f1 = n1; f2 = n2}
  else {f1 = n2; f2 = n1}


while(f1>=f2){
  if(f2<f1-1) r += f2+', '
    else if(f2 == f1-1) r += f2+' e '
    else r += f2 
  f2++
}

console.log('\n'+r+". \n \na soma deles é: "+(n1+n2))