console.log("27. Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos.\n")


let turma = Number(prompt("quantas turmas existe? "))
let soma = 0

console.log("\n")
for(let i = turma; i>0; i--){

  let alunos = -1
  while(alunos>40 || alunos<0){
    alunos = Number(prompt(`quantos alunos a turma ${i} tem?`))
    if(alunos>40 || alunos<0) console.log("\na turma não pode ter mais que 40 alunos ou menos que 0!")}

  soma += alunos
}

let média = soma/turma

console.log(`a média de alunos das ${turma}  turmas é de ${média} alunos por turma`)