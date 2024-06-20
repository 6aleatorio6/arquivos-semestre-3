// Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.

let pao = 2000, imposto = 10

function somaimposto(TI, VE) {
  return VE = VE+(VE*(TI/100))
}

pao = somaimposto(imposto, pao)

console.log(pao)