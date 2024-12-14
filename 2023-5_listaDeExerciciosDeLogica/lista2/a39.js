
  // console.log("39. Faça um programa que leia dez conjuntos de dois valores, o primeiro representando o número do aluno e o segundo representando a sua altura em centímetros. Encontre o aluno mais alto e o mais baixo. Mostre o número do aluno mais alto e o número do aluno mais baixo, junto com suas alturas.\n")
    


let linha1 = "", linha2 = "", linha3 = ""
function saida(classe, altura, cod){
  linha1 += "  aluno "+classe+"      "
  linha2 += " codigo do cliente: "+cod.toString().padEnd(3, " ")+" |  "
  linha3 += " altura: "+altura.toString().padEnd(12, " ")+"   |  "
}


function bancoa(a, b){
  let banco = new Array()
  let maior = 0, menor = Infinity
  let codM, codP, cont = 0

  

  
  for(let i = 1; i<=10; i++){
    let alunos = new Array()
    cont++
    
    console.log("39. Faça um programa que leia dez conjuntos de dois valores, o primeiro representando o número do aluno e o segundo representando a sua altura em centímetros. Encontre o aluno mais alto e o mais baixo. Mostre o número do aluno mais alto e o número do aluno mais baixo, junto com suas alturas.\n")

    
    alunos[0] = Number(prompt("numero do aluno "+cont+": "))
    alunos[1] =  Number(prompt(" sua altura: "))
    console.log("\n")
    banco[i] = alunos

    
    if(i != 10) console.clear()
    if(alunos[1] > maior) {codM = i; maior = alunos[1]}
    if(alunos[1] < menor) {codP = i; menor = alunos[1]}
  }

  saida("mais alto", banco[codM][1], banco[codM][0])
  saida("mais baixo", banco[codP][1],  banco[codP][0])
  
  return console.log(linha1+"\n"+linha2+"\n"+linha3)

}


bancoa()