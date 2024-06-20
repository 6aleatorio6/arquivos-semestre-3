console.log("12. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:n\nTabuada de 5:\n\n5 X 1 = 5\n5 X 2 = 10\n...\n\n5 X 10 = 50\n\")



let n = 0
let funfa = 1

while(funfa == 1){
  let tab = Number(prompt("tabuada de:"))
  
  if(tab>0 && tab<=10){
    console.log(`tabuada de ${tab} \n`)

    for (let i = 0; i<10; i++) {
      n++
      console.log(`${tab} X ${n} = ${tab*n}`)
    }

    if(n == 10) funfa = 0
  }
  else console.log("\napenas de 1-10")
}