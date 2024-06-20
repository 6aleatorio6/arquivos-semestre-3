// Faça um programa para imprimir:
//     1
//     2   2
//     3   3   3
//     .....
//     n   n   n   n   n   n  ... n
// para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha.


function saida(n){
  for(i = 1; i<=n; i++){    
    let paia = ''
    for(j = 1; j<=i; j++){
      paia += i+" "
    }
    console.log(paia)
  }
}


let n = Number(prompt("digite ma numero inteiro:  "))

saida(n)