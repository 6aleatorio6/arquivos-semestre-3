console.log("45. Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema. Após todos os alunos terem respondido a informação:\n\nAcerto Maior e Menor;\nTotal de Alunos que utilizaram o sistema;\nA Média das Notas da Turma.\nGabarito da Prova:\n01 - A\n02 - B\n03 - C\n04 - D\n05 - E\n06 - E\n07 - D\n08 - C\n09 - B\n10 - A\n\nApós concluir isto, você poderia incrementar o programa permitindo que o professor digite o \ngabarito da prova antes dos alunos usarem o programa.\n//////////////////////////\n\n")


function entrada(banco, cont){

  if(cont > 1){
    let yn = Number(prompt("outro aluno vai usar? (se não, digite 0)"))
    if(yn == 0) return "paia"
  }

  console.log("\nALUNO "+cont+": ")
  
  let aluno = {aluno: cont}
  for(let i = 1; i<=10; i++){
    aluno["q"+i] = prompt("Q"+i+": ")
  }
  
  aluno.acertos = 0
  for(let i = 1; i<=10; i++){
    if(aluno["q"+i].toUpperCase() == banco[0][i-1].toUpperCase()) aluno.acertos++
  }
  console.log(" Você teve "+aluno.acertos+" acertos")
  console.log(" Sua nota foi: "+aluno.acertos+"\n")
  banco.push(aluno)

  let paia = [aluno.acertos, cont]
  return paia
}

let banco = []

let gab = prompt("Deseja fazer seu proprio gabarito ou usar o padrao? digite 0 se for usar o padrão: ")
let gabarito = []
if(gab != 0) {
    for(let i = 0; i<10; i++) gabarito[i] = prompt("Q"+(i+1)+" vai ser: ");
    banco.push(gabarito)}
  else banco.push(gabarito = ["A", "B", "C", "D", "E", "E", "D", "C", "B", "A"])

let menor = [20], maior = [-1], media = 0, cont

for(let i = 1, j = entrada(banco, i); j != "paia"; i++, j = entrada(banco, i)){
  if(menor[0] > j[0]) {menor[0] = j[0]; menor[1] = j[1]}
  if(maior[0] < j[0]) {maior[0] = j[0]; maior[1] = j[1]}
  media += j[0]
  cont = i
}

media = media/cont



console.log("\n\n RESULTADOS")

console.log("\nALUNO COM MENOR NOTA: \n  foi o aluno "+banco[menor[1]].aluno+"\n  COM "+banco[menor[1]].acertos+" acertos")
console.log("\nALUNO COM MENOR NOTA: \n  foi o aluno "+banco[maior[1]].aluno+"\n  COM "+banco[maior[1]].acertos+" acertos")

console.log("\nMEDIA DA TURMA: "+media)
