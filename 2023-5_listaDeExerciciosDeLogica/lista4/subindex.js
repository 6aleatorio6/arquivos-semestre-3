let funfa, a
let en = "\nexercicio------------COMEÇO--------exercicio"
let fim=  "\nexercicio------------FIM--------exercicio"
console.log("\n(lista4-----------------Começo-----------------lista4)\n");

while(funfa !== 0){
  console.log("\n----------\nlista 4:")
  console.log("exercicios entre 1-51: ")
  console.log("voltar: 0")
  funfa = Number(prompt("escolha"))
  console.clear()
  
  if(funfa != 0){
    funfa = `./a${funfa}.js`
    
    console.log(en); a = require(funfa); ; delete     
    require.cache[require.resolve(funfa)]; console.log(fim)
  }
    
}

console.log("\n(lista4-----------------FIM-----------------lista4)\n")
a = require('../index.js')

