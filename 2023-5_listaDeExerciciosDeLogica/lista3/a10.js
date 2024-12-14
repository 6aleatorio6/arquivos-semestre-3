// Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores.

let a = [1,2,3,4,5,6,7,8,9, "paia", 11]
let b = [1,2,3,4,5,6,7,8,9, "paioso"]
let c = []

for(i = 0; i<a.length || i<b.length;i++){
  if(i < a.length){
    c.push(a[i])
  }
  console.log(a[i],b[i])
  
  if(i < b.length){
    c.push(b[i])
  }
}

  console.log(c)
