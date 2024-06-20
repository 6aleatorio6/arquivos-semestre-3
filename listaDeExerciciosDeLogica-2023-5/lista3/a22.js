// Sua organização acaba de contratar um estagiário para trabalhar no Suporte de Informática, com a intenção de fazer um levantamento nas sucatas encontradas nesta área. A primeira tarefa dele é testar todos os cerca de 200 mouses que se encontram lá, testando e anotando o estado de cada um deles, para verificar o que se pode aproveitar deles.
// Foi requisitado que você desenvolva um programa para registrar este levantamento. O programa deverá receber um número indeterminado de entradas, cada uma contendo: um número de identificação do mouse o tipo de defeito:
// necessita da esfera;
// necessita de limpeza; a.necessita troca do cabo ou conector; a.quebrado ou inutilizado Uma identificação igual a zero encerra o programa. Ao final o programa deverá emitir o seguinte relatório:
// Quantidade de mouses: 100

// Situação                        Quantidade              Percentual
// 1- necessita da esfera                  40                     40%
// 2- necessita de limpeza                 30                     30%
// 3- necessita troca do cabo ou conector  15                     15%
// 4- quebrado ou inutilizado              15                     15%


console.log("digite zero no numero de identificação para finalizar\nresponda com 's' ou 'n'\n")
function entrada(a){
  return Number(prompt(a+")numero de identificação do mouse: "))
}
function valida(a, c){
  let o = 0
  let paia = prompt(a)
  if(paia == "s") o = 1
  return o
}

function conta(a, b){
  let total = 0
  for(i = 0; i<a.length; i++){
    total += a[i][b]
  }
  return  total
}



let banco = []
for(cont = 1, i = entrada(cont); i != 0; cont++, i = entrada(cont)){
  let a = 0, b = 0, c = 0,d = 0
  a += valida(" necessita da esfera? ")
  b += valida(" necessita de limpeza? ")
  c += valida(" necessita troca do cabo ou conector? ")
  d += valida(" quebrado ou inutilizado? ")
  console.log("\n")
  
  banco.push({identificador: i, esfera: a, limpeza: b, troca: c, inul: d})
}


let total = {esfera: 0, limpeza: 0, troca: 0, inul: 0}
total.esfera = conta(banco, "esfera")
total.limpeza = conta(banco, "limpeza")
total.troca = conta(banco, "troca")
total.inul = conta(banco, "inul")

let po = {esfera: 0, limpeza: 0, troca: 0, inul: 0}
po.esfera = (total.esfera/banco.length)*100
po.limpeza = (total.limpeza/banco.length)*100
po.troca = (total.troca/banco.length)*100
po.inul = (total.inul/banco.length)*100


console.log("\nquantidade de mouse: "+banco.length+"\n")

console.log("Situação".padEnd(40, "  ") +" Quantidade".padEnd(20, "  ")+"Percentual")
console.log("1- necessita da esfera ".padEnd(42, "  ")+ total.esfera.toString().padEnd(20, "  ")+ po.esfera+"%")
console.log("2- necessita de limpeza".padEnd(42, "  ")+ total.limpeza.toString().padEnd(20, "  ")+ po.limpeza+"%")
console.log("3- necessita troca do cabo ou conector".padEnd(42, "  ")+ total.troca.toString().padEnd(20, "  ")+ po.troca+"%")
console.log("4- quebrado ou inutilizado".padEnd(42, "  ")+ total.inul.toString().padEnd(20, "  ")+ po.inul+"%")