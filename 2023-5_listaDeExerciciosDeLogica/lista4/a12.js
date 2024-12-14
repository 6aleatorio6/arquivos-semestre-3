// Embaralha palavra. Construa uma função que receba uma string como parâmetro e devolva outra string com os carateres embaralhados. Por exemplo: se função receber a palavra python, pode retornar npthyo, ophtyn ou qualquer outra combinação possível, de forma aleatória. Padronize em sua função que todos os caracteres serão devolvidos em caixa alta ou caixa baixa, independentemente de como foram digitados.


function nrepeat(a, b){
  for(let x of b){
     if(b[x] == b[a]) return true
  }
  return false
}


function sort(string){
  let embaralhado = []
  for(let i in string){
    
    let b = 1
    while(nrepeat(b, embaralhado)){
      b =  Math.floor(Math.random() * string.length)
    }

    embaralhado[i] = b
  }

  
  let resultado = ''
  for(let i in string){
    resultado += string[embaralhado[i]]
  }

  let caps = Math.floor(Math.random() * 2)
  if(caps == 0) resultado = resultado.toUpperCase()
    else resultado = resultado.toLowerCase()
  
  return resultado
}

console.log(sort('leoleo'))