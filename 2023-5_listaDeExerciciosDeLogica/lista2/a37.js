console.log("37. Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas e dos pesos dos clientes\n")




  
let funfa, cont = 0
let totalA = 0, totalP = 0

//maior altura
let codAG = 0, alturaAG = 0, pesoAG = 0

//menor altura
let codAP = 0, alturaAP = Infinity , pesoAP = 0

//maior peso
let codPG = 0, alturaPG = 0, pesoPG = 0

//menor peso
let codPP = 0, alturaPP = 0 , pesoPP = Infinity



console.log("INCIO DO SENSO!!\n")

while(funfa != 0){

  
  let cod = Number(prompt("cliente "+(cont+1)+", qual é o seu codigo? "))

  if(cod != 0){
    cont++
    let peso = 0, altura = 0
    
    for(let j = 2; j>0; j--){
      
      if(j == 2){
          altura = Number(prompt("Sua altura: "))
          totalA += altura 
            
          // if(alturaAG < altura) {codAG = cod; alturaAG = altura}
          // if(pesoPG < peso) alturaPG = altura;
        
        }
        else {
          peso = Number(prompt("Seu peso: "))
          totalP += peso

              
          // if(alturaAG < altura) pesoAG = peso
          // if(pesoPG < peso) {pesoPG = peso; codPG = cod}
        }    
    } 

    
    if(alturaAG < altura) {codAG = cod; alturaAG = altura;  pesoAG = peso}
    if(pesoPG < peso) {codPG = cod; alturaPG = altura;  pesoPG = peso}
    
    if(alturaAP > altura) {codAP = cod; alturaAP = altura;  pesoAP = peso}
    if(pesoPP > peso) {codPP = cod; alturaPP = altura;  pesoPP = peso}
    
    
  }
    else {funfa = 0; console.log("\nFIM DO SENSO!")}

  console.log("\n")
}


let médiaA = totalA/cont
let médiaP = totalP/cont




console.log("Médias:\n altura: "+médiaA+"\n peso: "+médiaP+"\n")




let linha1 = "", linha2 = "|", linha3 = "|", linha4 = "|", contsai = 0
function saida(classe, altura, peso, cod){
  contsai++
  linha1 += "  Cliente "+classe+"      "
  linha2 += " codigo do cliente: "+cod.toString().padEnd(3, " ")+" |  "
  linha3 += " altura: "+altura.toString().padEnd(12, " ")+"   |  "
  linha4 += " peso: "+peso.toString().padEnd(14, " ")+"   |  "

  // if(contsai == 2) linha1 += "\n", linha2 += "\n", linha3 += "\n", linha4 += "\n"
}

saida("Mais Alto", alturaAG, pesoAG, codAG)
saida("Com Menor altura", alturaAP, pesoAP, codAP)
saida("Mais Pesado", alturaPG, pesoPG, codPG)
saida("Mais leve", alturaPP, pesoPP, codPP)

console.log(linha1+"\n", linha2+"\n", linha3+"\n", linha4+"\n")

