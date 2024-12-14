console.log("33. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.\n\n")

console.log("digite 'end' quando acabar a sequencia\n")

let temp = 0, média = 0, menor = 0, maior = 0, cont = 0, funfa = 1

while(funfa == 1){
  cont++
  
  let paia = Number(prompt("temperatura "+cont+": "))
  if(isNaN(paia)) funfa = 0
    else temp = paia
  

  if(cont == 1) {maior = temp; menor = temp}
  
  média += temp

  if(temp < menor) menor = temp
    else if(temp > maior) maior = temp
}

média = média/cont


console.log("\nTEMPERATURAS\n média: "+média+"°C\n maior: "+maior+"°C\n menor: "+menor+"°C")