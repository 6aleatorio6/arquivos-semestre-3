// Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

let notas = [1, 1, 1, 1]

let media = 0
for(i = 0; i<4; i++){
  console.log("nota "+(i+1)+": "+notas[i])
  media += notas[i]*0.25
}
console.log("\nmedia: "+media)

