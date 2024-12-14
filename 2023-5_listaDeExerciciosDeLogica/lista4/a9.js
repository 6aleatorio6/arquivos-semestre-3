// Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.





function reverse(n){
  n = n.toString()
  let saida = ""
  for(i = n.length; i>0; i--){
    saida += (n.slice(-1, n.length))
    n = n.substr(0, (n.length-1))
  }
  return saida
}

console.log(reverse(prompt("N: ")))