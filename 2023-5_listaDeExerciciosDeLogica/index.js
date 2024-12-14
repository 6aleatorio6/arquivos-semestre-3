 let funfa = 'funfa0'

while(funfa !== 0){
  let paia
  console.log("(menu-------------COMEÇO------------------menu)\nmenu:\n")
  console.log("99) sequencial")
  console.log("4) lista 4")
  console.log("3) lista 3")
  console.log("2) lista 2")
  console.log("1) lista 1")
  console.log("0) sair")
  funfa = Number(prompt("escolha: "))

  console.log("\n(menu-------------FIM------------------menu)\n")


  if(funfa == 1){
    paia = require('./lista1/todas.js')
    delete require.cache[require.resolve('./lista1/todas.js')]
  }
    else if(funfa == 99){
      paia = require('./sequencial/unico.js')
      delete require.cache[require.resolve('./sequencial/unico.js')]
    }
    else{
      paia = require('./lista'+funfa+'/subindex.js')
      delete require.cache[require.resolve('./lista'+funfa+'/subindex.js')]
    }
}
  