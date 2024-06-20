// Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos.


function paia(n1, n2, n3){
  return n1+n2+n3
}


let paioso = []
for(i = 0; i<3; i++){
  paioso[i] = Number(prompt("n"+(i+1)))
}

console.log(paia(paioso[1], paioso[2], paioso[0]))
