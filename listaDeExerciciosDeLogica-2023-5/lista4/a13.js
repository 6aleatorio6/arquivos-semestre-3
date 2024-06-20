// Desenha moldura. Construa uma função que desenhe um retângulo usando os caracteres ‘+’ , ‘−’ e ‘| ‘. Esta função deve receber dois parâmetros, linhas e colunas, sendo que o valor por omissão é o valor mínimo igual a 1 e o valor máximo é 20. Se valores fora da faixa forem informados, eles devem ser modificados para valores dentro da faixa de forma elegante.

function retangulo(line, coluna){
  if(line == undefined || line == null || line < 1) line = 1
    else if(line > 20) line = 20
  if(coluna == undefined || coluna == null || coluna < 1) coluna = 1
    else if(coluna > 20) coluna = 20
  
  let ret  = ""
  for(let i = 0; i < coluna; i++){
    for(let j = 0; j < line; j++){
      if(j == 0 && i == 0 || j == line-1 && i == coluna-1 || j == line-1 && i == 0 || j == 0 && i == coluna-1) ret += "+"
        else if(j == 0 || j == line-1) ret += "|"
        else if( i == 0 || i == coluna-1) ret += "- "
        else ret += "  "
    }
    ret += "\n"
  }
  return ret
}

console.log(retangulo(-2000, 10000) )