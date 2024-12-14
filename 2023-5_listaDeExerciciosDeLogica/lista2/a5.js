console.log("5. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.\n")

console.log("país A tem que ter uma população menor com uma taxa de crescimento maior. O país B é o oposto disso \n")

let funfa = 1, funfa1 = 1
let pA = 0, tA = 0, pB = 0, tB = 0, anos = 0

while(funfa == 1 && funfa1 == 1){
  pA = Number(prompt("digite a populçao do país A"))
    tA = Number(prompt("digite a taxa de crescimento do páis A por ano(1-100)%"))
      
  console.log("\n")
 
  pB = Number(prompt("digite a populçao do país B"))
    tB = Number(prompt("digite a taxa de crescimento do páis B por ano(1-100)%"))


  
  if(Number.isInteger((pA+tA+pB+tB))){
     funfa1 = 0
     if(tA>tB && tA>=0 && tA<=100 && tB>=0 && tB<=100) funfa = 0
      else console.log("\n a taxa de crescimento dos países está incorreta! confira a primeira mensagem \n")}
    
    else console.log("\nutilize apenas numeros inteiros!\n")
}

let tA1 = tA/100
let tB1 = tB/100

while(pA<pB){
  pA += pA*tA1
  pB += pB*tB1
  anos += 1
}

console.log("\no Pais A precisou de "+anos+" ano(s) para ultrapassar ou se igualar ao país B.")
console.log("\n depois de "+anos+" anos: \n país A "+pA.toFixed(3)+" com a taxa de crescimento de "+tA+"% por ano\n país B "+pB.toFixed(3)+" com a taxa de crescimento de "+tB+"% por ano")
