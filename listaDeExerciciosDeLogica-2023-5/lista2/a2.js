console.log("2. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.\n")



let login = prompt("nome de usuário: ") 
let senha = prompt("senha: ")

while(login == senha){
  console.log("\nerro! seu nome de usuario e senha sao iguais.\n")
  console.log("digite seus dados novamente.")
  login = prompt("nome de usuario: ") 
  senha = prompt("senha: ")
}

console.log("conectando...")