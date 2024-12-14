console.log("43. O cardápio de uma lanchonete é o seguinte:\n\nEspecificação / Código/Preço\n\nCachorro Quente / 100 / R$ 1,20\nBauru Simples / 101 / R$ 1,30\nBauru com ovo / 102 / R$ 1,50\nHambúrguer / 103 / R$ 1,20\nCheeseburguer / 104 / R$ 1,30\nRefrigerante / 105 / R$ 1,00\n\nFaça um programa que leia o código dos itens pedidos e como desejados. \nCalcule e mostre o valor a ser pago por item (preço * quantidade) e o \ntotal geral do pedido. Considere que o cliente deve informar quando o \npedido deve ser encerrado.\n///////////////////////\n")




function entrada(a, b){
  
  let cod = Number(prompt("código do produto: "))
  if(cod == 0) return "paia"
  
  let qntd = 0
  
  qntd += Number(prompt("       quantidade: "))
  console.log("\n")

  let produto
  for(let i = 0, j = a[0].cod; j != cod+1 ; i++, j++) if(a[i].cod == cod) produto = i

  
  let vTotal = 0
    
  vTotal += qntd*a[produto].preço

  b.push({espe: a[produto].espe, qntd: qntd, valor: vTotal})
  return vTotal
}


let cardapio = [
  {espe: "Cachorro Quente", cod: 100, preço: 1.20},
  {espe: "Bauru Simples", cod: 101, preço: 1.30},
  {espe: "Bauru com ovo", cod: 102, preço: 1.50},
  {espe: "Hambúrguer", cod: 103, preço: 1.20},
  {espe: "Cheeseburguer", cod: 104, preço: 1.30},
  {espe: "Refrigerante", cod: 105, preço: 1.00}
]

let notaf = []

console.log("digite '0' ou deixe o 'campo de codigo do produto' em branco para finalizar\n")

for(let i = 0; i<cardapio.length; i++){
  console.log(cardapio[i].espe.padEnd(15, " ")+" | "+cardapio[i].cod+" | R$"+cardapio[i].preço.toFixed(2))
}


console.log("\n")

let total = 0, cont = 0
for(let i = entrada(cardapio, notaf); i != "paia"; i = entrada(cardapio, notaf)) {total += i, cont++}



console.log("\nNOTA FISCAL: ")
for(let i = 0; i<cont; i++){
  console.log(notaf[i].espe.padEnd(15, " ")+(" |  qntd: "+notaf[i].qntd).toString().padEnd(13, " ")+" | valor total: R$"+notaf[i].valor.toFixed(2))
}
console.log(("| total: R$"+total.toFixed(2)).toString().padStart(46, " "))