console.log("31. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra\n \n")

let caixa = "CAIXA REGISTRADORA: \n"

let produto = 1, cont = 0, total = 0

while(produto != 0){

  cont++
  produto = Number(prompt(`  produto ${cont} R$: `))

  caixa += produto+"\n"
  total += produto
}

console.log(`\n \nTotal: R$ ${total} `)
let dinheiro = Number(prompt("dinheiro: R$ "))
console.log(`troco: R$ ${dinheiro-total}`)