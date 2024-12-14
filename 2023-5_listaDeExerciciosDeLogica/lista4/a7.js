// Faça um programa que use a função valorPagamento para determinar o valor a ser pago por uma prestação de uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em atraso e passar estes valores para a função valorPagamento, que calculará o valor a ser pago e devolverá este valor ao programa que a chamou. O programa deverá então exibir o valor a ser pago na tela. Após a execução o programa deverá voltar a pedir outro valor de prestação e assim continuar até que seja informado um valor igual a zero para a prestação. Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da seguinte forma. Para pagamentos sem atraso, cobrar o valor da prestação. Quando houver atraso, cobrar 3% de multa, mais 0,1% de juros por dia de atraso.

function VP(V, A) {
  let juros = 0
  if(A>0) juros = 0.03+0.001*A
  return [V+V*juros, juros]
}

function valor() {
  return Number(prompt("valor da compra:"))
}



let banco = []
for (let i = valor(); i != 0; i = valor()) {
  let atraso = Number(prompt("dias atrasados:"))

  let VPaia = VP(i, atraso)
  console.log("valor a ser pago: "+VPaia[0]+"\n")

  banco.push({valor: i, diasAtrasado: atraso, juros: VPaia[1], Vpago: VPaia[0]})
}

console.log("\n")

let consol = ''
for (let i = 0; i < banco.length; i++) {
  consol += (i+1)+") "
  consol += " valor da conta: "+banco[i].valor
  consol += ", dias atrasado: "+banco[i].diasAtrasado
  consol += ", juros: "+(banco[i].juros*100).toFixed(0)
  consol += ", total a pago: "+banco[i].Vpago
  consol += "\n"

}

console.log(consol)