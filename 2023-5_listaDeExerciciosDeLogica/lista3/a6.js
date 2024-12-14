// Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.

const {entrada} = require('../funções.js')
let medias = {menor: 0, maior: 0}

for(p = 0; p<10; p++){
  console.log("aluno "+(p+1))
  
  let notas = []
  entrada(4, notas, "  nota ", null)
  
  let media = 0
  for(j = 0; j<4; j++){
    media += notas[j]*0.25
  }
  
  if(media < 7) a = "menor"
    else a = "maior"
  
  medias[a] ++
}

console.log(medias["maior"]+" alunos tiraram média maior ou igual a 7.0.")



