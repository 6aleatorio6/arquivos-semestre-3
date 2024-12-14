console.log("22. Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por qual número ele é divisível.\n")


let num = Number(prompt("digite um numero inteiro: ")), cont = 0, divi = ": "


if(Number.isInteger(num)){

   for(let i = num; i>0; i--){
      if(num%i == 0 ) {cont++; divi += i+" "}
    }
    
    if(cont>2) console.log(`\no numero ${num} é composto, pois ele pode ser divido pelos seguintes numeros${divi}`)
      else console.log(`\no numero ${num} é primo`)
}
  else console.log("funciona apenas com numero inteiro")