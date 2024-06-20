
console.log("6. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.\n")




for(let conta = 1; conta<=20; conta++){
  console.log(`${conta} pato`)
}

console.log("\n")



let texto1 = "repetindo: "
for(let conta1 = 1; conta1<=20; conta1++){
  texto1 += (` ${conta1} pato,`)
  }
console.log(texto1)