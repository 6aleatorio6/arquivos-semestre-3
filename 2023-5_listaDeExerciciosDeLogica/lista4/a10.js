// Jogo de Craps. Faça um programa de implemente um jogo de Craps. O jogador lança um par de dados, obtendo um valor entre 2 e 12. Se, na primeira jogada, você tirar 7 ou 11, você um "natural" e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps" e você perdeu. Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto". Seu objetivo agora é continuar jogando os dados até tirar este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente

function sort(){
  return Math.floor(Math.random() * 11)+2
}



console.log("jogos de claps (enter para jogar um dado e outra tecla para sair)")


function confirm(end, a){
  let paioso
  if(end == true) paioso = ("\njogar novamente? ")
    else if(end == 'pao'){
      if(a.length > 30){console.log(a+"\n"); paioso = "jogue o dado dnv"}
        else paioso = a+"jogue o dado dnv"
    }
    else  paioso = ("jogar os dados ")
  if(0 == Number(prompt(paioso))) return true
    else return false
} 



let end = false, paiao = false, a
while(confirm(end, a)){
  let n = sort()
  a = "voce tirou "+n+", "

  if(paiao){
    if(n == 7) {
      a += "logo vc perdeu. :)" ;end = true; paiao = false
    }
      else if(paiao == n){
        a += "vc conseguiu tirar o msm numero, vc gannhou. :(" ;end = true; paiao = false      
      }
      else{
        end = 'pao'
      }
  }
    
    else if(n == 4 || n == 5 || n ==6 || n == 8 || n == 9 || n == 10) {
      a += " vc fez um ponto! jogue os dados até tirar esse numero dnv, mas se tirar 7 perde. :|"
      paiao = n
      end = 'pao'
    
    }
    else if(n == 2 || n == 3 || n == 12){
      a += "um craps! vc perdeu. :)";end = true
    }
    else{
      a += "um natural! vc ganhou. :( ";end = true
    }

  if(end != 'pao')console.log(a)
  
}