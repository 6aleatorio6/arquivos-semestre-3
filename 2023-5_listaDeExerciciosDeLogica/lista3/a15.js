// Faça um programa que leia um número indeterminado de valores, correspondentes a notas, encerrando a entrada de dados quando for informado um valor igual a -1 (que não deve ser armazenado). Após esta entrada de dados, faça:
// Mostre a quantidade de valores que foram lidos;
// Exiba todos os valores na ordem em que foram informados, um ao lado do outro;
// Exiba todos os valores na ordem inversa à que foram informados, um abaixo do outro;
// Calcule e mostre a soma dos valores;
// Calcule e mostre a média dos valores;
// Calcule e mostre a quantidade de valores acima da média calculada;
// Calcule e mostre a quantidade de valores abaixo de sete;
// Encerre o programa com uma mensagem;


function entrada(a){
  return Number(prompt("N"+a+": "))
}

let numeros = [], num = "", soma = 0
for(cont = 1, i = entrada(cont); i != -1; cont++,  i = entrada(cont)) {
  numeros.push(i)
  soma+= i
}

let media = soma/numeros.length,  acimamedia = 0, baixod7 = 0

for(let i = 0; i<numeros.length; i++){
  num += " "+numeros[i]
  if(numeros[i] > media) acimamedia++
  if(numeros[i] < 7) baixod7++
}


  
console.log("\n")
console.log("quantidade de  numeros lidos: "+numeros.length)
console.log(num)

for(let i = 0, numrr = numeros.reverse(); i<numeros.length; i++){
  console.log(numrr[i])
}

console.log("soma: "+soma)
console.log("media: "+media)
console.log("quantidade de numeros acima da media: "+acimamedia)
console.log("quantidade de numeros abaixo de 7: "+baixod7)
console.log("finalizado")