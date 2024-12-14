// Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de mesPorExtenso de AAAA. Opcionalmente, valide a data e retorne NULL caso a data seja inválida.


function dformat(data){
  let paia = data.split("/");
  let meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ]

  return paia[0]+" de "+meses[Number(paia[1])-1]+" de "+paia[2]
}


console.log(dformat(prompt("digite uma data(exemplo 19/9/2023): ")))