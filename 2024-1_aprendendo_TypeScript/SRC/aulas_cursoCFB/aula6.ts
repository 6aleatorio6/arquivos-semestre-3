// Readonly Array é um array  para somente leitura, com os valores definido na criação

const  arraypaiaRE:ReadonlyArray<number|string> = [10,2,3,4,"a"]


// alguns metodos do array
const arraynormal = ["10",10]

arraynormal.pop() //serve para pegar o ultimo elemento do array (excluindo no processo)
arraynormal.shift() //serve para pegar o primeirp elemento do array (excluindo no processo)
arraynormal.push() //serve para add novos elementos no final do array
arraynormal.unshift() //serve para add novos elementos no começo do array