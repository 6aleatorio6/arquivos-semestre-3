console.log("44. Em uma eleição presidencial existem quatro candidatos. Os votos são protegidos por meio de código. Os códigos usados ​​são:\n\n1 , 2, 3, 4 - Votos para os respectivos candidatos\n(você deve montar a tabela ex: 1 - Jose/ 2- João/etc)\n5 - Voto Nulo\n6 - Voto em Branco\n\nFaça um programa que calcule e mostre:\n\nO total de votos para cada candidato;\nO total de votos nulos;\nO total de votos em branco;\nA percentagem de votos nulos sobre o total de votos;\nA percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos tem-se o valor zero.\n//////////////////////////\n\n")

function entrada(a, b){
  return voto = Number(prompt("voto n"+b+": "))
}


let candidatos = [
  {nome: "JOSÉ", votos: 0},
  {nome: "JOÃO", votos: 0},
  {nome: "PATO", votos: 0},
  {nome: "CAVALO", votos: 0},
  {nome: "NULO", votos: 0},
  {nome: "BRANCO", votos: 0}
]

for(let i = 0; i<candidatos.length; i++){
  console.log((i+1)+"- "+candidatos[i].nome)
}

console.log("\nURNA:")
console.log("\n--começo da votação--\n")

let total = 0
for(let i = 1, j = entrada(candidatos, i); j != 0; i++, j = entrada(candidatos, i)){
  candidatos[j-1].votos++
  total++
}

console.log("\n--fim da votação--\n")
console.log("RESULTADO:\n")

for(let i = 0; i<candidatos.length; i++){
  if(i >= 0 && i <4)console.log(candidatos[i].nome+" teve "+candidatos[i].votos+" votos")
    else console.log("teve "+candidatos[i].votos+" votos "+candidatos[i].nome+" (o que representa "+((candidatos[i].votos / total)*100).toFixed(2)+"% do total de votos)")

  if(i == 3) console.log("\n")
}

