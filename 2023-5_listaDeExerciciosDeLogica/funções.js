function saida(bloco, stop, conteudo_format, linhas, titulo, cod, a, b){

  
  let l =  [
    conteudo_format[0]+titulo,
    conteudo_format[1]+cod,
    conteudo_format[2]+a,
    conteudo_format[3]+b,
    ]
  
  if(titulo != undefined ) titulo = titulo.toString()
  if(cod != undefined ) cod = cod.toString()
  if(a != undefined ) a = a.toString()
  if(b != undefined ) b = b.toString()
  
  let all = [titulo, cod, a, b]

  //para mostrar os blocos no final
  if(stop == "stop"){
    for(let i = 1; i<=linhas; i ++) {
      for(let j = 0; j<=5; j++){
        console.log(bloco[i][ ("linha"+j) ])
      }
    } 
    return
  }

  //criar os objetos das linhas se n tiverem sido criadas
  if (bloco[linhas] == undefined) {
    bloco[linhas] = {
      linha0: "",
      linha1: "",
      linha2: "",
      linha3: "",
      linha4: "",
      linha5: "",
    } 
  }


  //o tamanho da retangulo
    let tamanho = 0, barras = "-"
           
    for(let i = 0; i<4; i++){
      let paiadnv = 0
      if(all[i] != undefined) paiadnv = all[i] 

      if(paiadnv.length > 10) {if(paiadnv.length > tamanho){tamanho = paiadnv.length}}
        else if(all[i] != undefined) tamanho = l[i].length

    }
    tamanho += 2
    for(let i = 0; i<tamanho; i++) barras += "-"

  //criar um retangulo para as infos
  let format = {
    f1: function(a) {bloco[linhas]["linha"+a] += "| "+l[0].padEnd(tamanho, " ") + "| "},
    f2: function(b) {bloco[linhas]["linha"+b] += "| "+l[1].padEnd(tamanho, " ") + "| " },
    f3: function(c) {bloco[linhas]["linha"+c] += "| "+l[2].padEnd(tamanho, " ") + "| "},
    f4: function(d) {bloco[linhas]["linha"+d] += "| "+l[3].padEnd(tamanho, " ") + "| "},
  }

  let format_puro = {
    f1: function(a) {bloco[linhas]["linha"+a] += "| "+titulo.padEnd(tamanho, " ") + "| "},
    f2: function(b) {bloco[linhas]["linha"+b] += "| "+cod.padEnd(tamanho, " ") + "| " },
    f3: function(c) {bloco[linhas]["linha"+c] += "| "+a.padEnd(tamanho, " ") + "| "},
    f4: function(d) {bloco[linhas]["linha"+d] += "| "+b.padEnd(tamanho, " ") + "| "},
  }


  //verifica se a variavel está vazia e se não estiver formata a informação para o bloco
  
    bloco[linhas].linha0 += "."+barras+". "

    for(let i = 1, j = 1; i<=5; i++){
      if(all[i-1] != undefined) {        
        if(all[i-1].length < 10) {format["f"+i](j); j++}
          else {format_puro["f"+i](j); j++}
      }
      if(i == 5) {
        bloco[linhas]["linha"+(j)] += "'"+barras+"' "
        // for(let a = j+1; a<= 5; a++) bloco[linhas]["linha"+a] = "".padEnd(tamanho, " ")
      }
    }
  }



function entrada(vezes, vetor, pergunta, paia, a){
  for(i = 0; i<vezes; i++){
    if(paia == 0) vetor[i] = prompt(pergunta+(i+1)+": ")
      else if(paia == 1) vetor[i][a] = prompt(pergunta+(i+1)+": ")
      else vetor[i] = Number(prompt(pergunta+(i+1)+": "))
  }
}


module.exports = {saida, entrada}