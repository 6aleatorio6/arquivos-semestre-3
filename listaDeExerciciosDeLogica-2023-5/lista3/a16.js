// Utilize uma lista para resolver o problema a seguir. Uma empresa paga seus vendedores com base em comissões. O vendedor recebe $200 por semana mais 9 por cento de suas vendas brutas daquela semana. Por exemplo, um vendedor que teve vendas brutas de $3000 em uma semana recebe $200 mais 9 por cento de $3000, ou seja, um total de $470. Escreva um programa (usando um array de contadores) que determine quantos vendedores receberam salários nos seguintes intervalos de valores:
// $200 - $299
// $300 - $399
// $400 - $499
// $500 - $599
// $600 - $699
// $700 - $799
// $800 - $899
// $900 - $999
// $1000 em diante
// Desafio: Crie ma fórmula para chegar na posição da lista a partir do salário, sem fazer vários ifs aninhados.

//vbm = Vendas Brutas por MÊS 
let VBM = [
  {vendedor: "clebinho", VB: 2000},
  {vendedor: "clebinho", VB: 2000},
  {vendedor: "clebinho", VB: 2000},
  {vendedor: "clebinho", VB: 2000},
  {vendedor: "clebinho", VB: 2000},
  {vendedor: "clebinho", VB: 2000},
  {vendedor: "clebinho", VB: 2000},
  {vendedor: "clebinho", VB: 2000},
  {vendedor: "clebinho", VB: 5000},
  {vendedor: "painha", VB: 22000},
]

for(i = 0 ; i<VBM.length; i++){
  VBM[i].salario = (200+(VBM[i].VB*0.09))
}

let intervalos = [[],[],[],[],[],[],[],[]]


for(i = 0; i<VBM.length; i++){
  for(j = 299, paia = 0, pp = true; paia != intervalos.length-1 && pp == true; j += 100, paia++){
    if(VBM[i].salario<j && VBM[i].salario>(j-99)) {intervalos[paia].push(i); pp = false}  
  }
  if(VBM[i].salario>1000) intervalos[paia].push(i)
}

for(i = 200, a = 0; i<900; i +=100, a++){
  console.log("$"+i+" - &"+(i+99)+":  "+intervalos[a].length+" vendedores")
}
console.log("$1000 em diante: "+intervalos[7].length+" vendedores")
console.log(VBM[intervalos[4][0]])