// Faça um programa que converta da notação de 24 horas para a notação de 12 horas. Por exemplo, o programa deve converter 14:25 em 2:25 P.M. A entrada é dada em dois inteiros. Deve haver pelo menos duas funções: uma para fazer a conversão e uma para a saída. Registre a informação A.M./P.M. como um valor ‘A’ para A.M. e ‘P’ para P.M. Assim, a função para efetuar as conversões terá um parâmetro formal para registrar se é A.M. ou P.M. Inclua um loop que permita que o usuário repita esse cálculo para novos valores de entrada todas as vezes que desejar.



function conver(horas, minutos) {
  let info
  if(horas>12){
    horas = horas-12
    info = 'A'
  }
    else info = 'P'
  return [horas+":"+minutos, info]
}

function saida(dadosconver) {
  let consol = dadosconver[0]
  if(dadosconver[1] == 'A') consol += " P.M"
    else consol += " A.M"
  console.log(consol)
}

function confirm() {
  console.log("\n")
}

while(confirm() == 's'){
  saida(conver(Number(prompt("horas")), Number(prompt("minutos"))
    ))
  return prompt("deseja fazer  conversão? (s ou n)")
}