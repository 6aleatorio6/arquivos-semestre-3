// Faça um programa para imprimir:
//     1
//     1   2
//     1   2   3
//     .....
//     1   2   3   ...  n
// para um n informado pelo usuário. Use uma função que receba um valor n inteiro imprima até a n-ésima linha.
  
function saida(n){
  for(i = 1; i<=n; i++){    
    let paia = ''
    for(j = 1; j<=i; j++){
      paia += j+" "
    }
    console.log(paia)
  }
}


let n = Number(prompt("digite ma numero inteiro:  "))

saida(n)