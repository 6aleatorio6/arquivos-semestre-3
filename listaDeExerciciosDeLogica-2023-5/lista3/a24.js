// Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um vetor . Depois, mostre quantas vezes cada valor foi conseguido. Dica: use um vetor de contadores(1-6) e uma função para gerar numeros aleatórios, simulando os lançamentos dos dados.

let vetor = [0, 0, 0, 0, 0, 0]


for(i = 0, sort = Math.floor(Math.random() * 6)+1; i<100; i++, sort = (Math.floor(Math.random() * 6)+1)  ){
  vetor[sort-1]++
}


for(i = 1; i<=6; i++){
  console.log("lado "+i+": caiu "+vetor[i-1]+" vezes")
}