// Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.

let vetor = [1, 2, 3, 4, 5]

for(i = 0, soma = 0, multipli = vetor[0], numeros = ""; i<5; i++){
  soma += vetor[i]
  if(i<4)multipli = multipli * vetor[i+1]
  numeros += " "+vetor[i]

}

console.log("numeros do vetor: "+numeros)
    console.log("soma dos numeros: "+soma)
    console.log("multipli dos numeros: "+multipli)