// Faça um Programa que leia um vetor A com 10 números inteiros, calcule e mostre a soma dos quadrados dos elementos do vetor.


let a = [1,2,3,4,5,6,7,8,9,10]

for(i = 0, sq = 0; i<=a.length; i++){
  if(i<a.length){
    console.log(a[i])
    sq += a[i]**2
  }
  else console.log("soma dos quadrados: "+sq)
}