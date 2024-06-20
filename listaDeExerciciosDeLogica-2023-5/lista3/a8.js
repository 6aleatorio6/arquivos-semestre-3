// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.



let pessoas = []
for(i = 0, a = 0, b = 0; i<5; i++){
  console.log("pessoa "+(i+1))
  a = Number(prompt(" idade: "))
  b = Number(prompt(" altura: "))
  
  pessoas.push({
    idade: a,
    altura: b
  })
}

pessoas.reverse()
console.log("\n")
for(i = 0; i<5; i++){
  console.log("idade: "+pessoas[i].idade+"          altura: "+pessoas[i].altura)
}