console.log("26. Numa eleição existem três candidatos. Faça um programa que peça o número total de convidados. Peça para cada eleitor eleitor e ao final mostre o número de votos de cada candidato.\n")

let numC = Number(prompt("quantos convidades tem?")), cont = 0, c1 = 0, c2 = 0, c3 = 0

console.log("\nNUMERO DE CADA CANDITADO\n canditado 1: 1 \n canditado 2: 2\n canditado 3: 3\n")

for(let i = numC; i>0; i--){
  cont++
  
  let voto = Number(prompt(`convidado ${cont}, deseja votar em qual candidato?`))
  if(voto == 1) c1++
    else if(voto == 2) c2++
    else c3++
}

console.log("\n \n \nFIM DAS ELEIÇÔES!!!") 
console.log(`\nvotos: \n canditado 1: ${c1} votos\n canditado 2: ${c2} votos\n canditado 3: ${c3} votos`)
