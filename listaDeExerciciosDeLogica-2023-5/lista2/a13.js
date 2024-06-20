console.log("13. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.\n")



let base = Number(prompt("base:"))
let ex = Number(prompt("expoente:"))
let r = base

for (let i = 1; i<ex; i++) {
  r = r*base
}

console.log(base+" elevado a "+ex+" resulta em: "+r)
