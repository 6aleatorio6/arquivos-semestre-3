console.log("3. Faça um programa que leia e valide as seguintes informações: \nNome: maior que 3 caracteres;\nIdade: entre 0 e 150;\nSalário: maior que zero;\nSexo: 'f' ou 'm';\nEstado Civil: 's', 'c', 'v', 'd';\n")



let a = 'n'
while(a == 'n'){

let nome = prompt("Nome: ")
let cnome = Number(nome.length)
let idade = Number(prompt("idade: "))
let sala = Number(prompt("salario: "))
let sexo = prompt("genero f(feminino) ou m(masculino): ")
let ec = prompt("estado civil s(solteiro), c(casado), v(viuva(o)) ou d(divorciada):")
let gen = 0, estd = 0

console.log("\n")

while(cnome <= 3){
  console.log("nome invalido! escreva um nome que tenha mais de 3 letras.")
  nome = prompt("Nome: ")
  cnome = Number(nome.length)}
  

while(idade<0 || idade>150){
  console.log("idade invalida! escreva sua idade entre os intervalos 0-150")
  idade = Number(prompt("idade: "))
  }

while(sala<0){
  console.log("salario invalido! escreva um salario maior que zero")
  idade = Number(prompt("salario: "))
  }

while(sexo != 'f' && sexo != 'm'){
  console.log("genero invalido! escreva f ou m")
  sexo = prompt("genero: ")
  }

while(ec != 's' && ec!= 'c' && ec!= 'v' && ec!= 'd'){
  console.log("estado civil s(solteiro), c(casado), v(viuva(o)) ou d(divorciada):")
  ec = (prompt("estado civil: "))
  }


if(sexo == 'm') gen = "masculino"
  else gen = "feminino"

if(ec == 's') estd = "solteiro(a)"
  else if(ec == 'c') estd = "casado(a)"
  else if(ec == 'v') estd = "viuvo(a)"
  else estd = "divorciado(a)"

  console.log("\n"+nome+" de "+idade+" do sexo "+gen+" "+estd+" e que recebe o salario de: "+sala)
  a = prompt("correto? (s ou n)")
}