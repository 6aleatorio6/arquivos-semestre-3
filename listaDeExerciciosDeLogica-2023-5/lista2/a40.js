
console.log("40. Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de trânsito. Foram obtidos os seguintes dados:\n\nCódigo da cidade;\n\nNúmero de veículos de passeio (em 1999);\nNúmero de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:\n\nQual o maior e menor índice de acidentes de transito e a que cidade pertence;\n\nQual a média de veículos nas cinco cidades juntas;\n\nQual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.\n\n//////////////\n")

// 40. Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de trânsito. Foram obtidos os seguintes dados:

// Código da cidade;
// Número de veículos de passeio (em 1999);
// Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
// Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
// Qual a média de veículos nas cinco cidades juntas;
// Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.



function entrada(){
  console.log("\ncomeço da entrada de dados\n")
  
  let banco = new Array()
  
  let aux_cont = 0

  function cod(){
    console.log("\n")
    let start = Number(prompt("código da cidade "+(aux_cont+1)+": "))
    return start
  }

  let  aux_maior = -1, aux_cont2k = 0, maior = 0, aux_menor = 999999999, menor = 0, media = 0, media_2k = 0
  
  for(let i = cod(); i != 0; i = cod()){
    aux_cont++
    let dados = new Array()
    dados[0] = Number(prompt(" Número de veículos de passeio (em 1999): "))
    dados[1] = Number(prompt(" Número de acidentes de trânsito com vítimas (em 1999): "))
    banco[i] = dados
    
    //maior
    if(aux_maior < dados[1]) {aux_maior = dados[1]; maior = i}

    //menor
    if(aux_menor > dados[1]) {aux_menor = dados[1]; menor = i}

    //média
    media += dados[0]

    //média de acidentes com menos de 2 mil pessoas
    if(dados[0] < 2000) {media_2k += dados[1]; aux_cont2k++}
    
  }

  //média
  media = media/aux_cont

  //média de acidentes com menos de 2 mil pessoas
  media_2k = media_2k/aux_cont2k
  
  let resumo = [banco, maior, menor, media, media_2k]
  return resumo
}



//para formatar saida em caixas
const  {saida} = require('../funções.js');

let bloco = []  
  //o que vai ter em cada linha
    let a = [
      "",
      " codigo da cidade: ",
      " Número de veículos de passeio: ",
      " índice de acidentes de transito: ",
    ]

  
let resumo = entrada()
  
saida(bloco, 0, a, 1, "CIDADE COM MAIOR indice", resumo[1], resumo[0][resumo[1]][0],  resumo[0][resumo[1]][1])
saida(bloco, 0, a, 1, "CIDADE COM MENOR indice", resumo[2], resumo[0][resumo[2]][0],  resumo[0][resumo[2]][1])
saida(bloco, 0, a, 2, "média de acidentes de trânsito nas cidades", "com menos de 2.000 veículos de passeio: "+resumo[4])
saida(bloco, 0, a, 2, "média de veículos de todas", "as cidades é: "+resumo[3])

saida(bloco, "stop", a, 2)

