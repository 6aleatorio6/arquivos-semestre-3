// Altere o programa anterior, intercalando 3 vetores de 10 elementos cada.


let a = [1,2,3,4,5,6,7,8,9, "paia", 11]
let b = [1,2,3,4,5,6,7,8,9, "paioso"]
let c = []
let d = [1,2,3,4,5,6,7,8,9, "paiadms"]

for(i = 0; i<a.length || i<b.length || i<d.length;i++){
  if(i < a.length){
    c.push(a[i])
  }
  console.log(a[i],b[i],d[i])
  
  if(i < b.length){
    c.push(b[i])
  }

  if(i < d.length){
    c.push(d[i])
  }
} 


  console.log(c)
