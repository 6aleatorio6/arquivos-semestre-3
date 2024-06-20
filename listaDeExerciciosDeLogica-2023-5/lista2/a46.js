console.log("46. ​​Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No\nfinal da série de saltos de cada atleta, o melhor e o pior resultado são eliminados. O seu\nresultado fica sendo a média dos três resultados restantes. Você deve fazer um programa que \nreceba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e depois informe a \nmédia dos saltos conforme a descrição acima de chuva (retirar o melhor e o pior salto e \ndepois calcular a média). Faça uso de uma lista para armazenar os saltos. Os saltos são \ninformados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado \nquando não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo \nabaixo:\n\nAtleta: Rodrigo Curvêllo\nPrimeiro Salto: 6,5 m\nSegundo Salto: 6,1 m\nTerceiro Salto: 6,2 m\nQuarto Salto: 5,4 m\nQuinto Salto: 5,3 m\nMelhor salto: 6,5 m\nPior salto: 5,3 m\nMédia dos demais saltos: 5,9 m\nResultado final:\nRodrigo Curvêllo: 5,9 m\n//////////////////////////\n\n")

let banco = []
function entrada(banco, cont){
  let nome = prompt(cont+")Nome do Atleta:  ")
  if(nome == '') return "paia"
  
  let saltos = [
    Number(prompt(" primeiro Salto: ")),
    Number(prompt(" segundo Salto: ")),
    Number(prompt(" terceiro Salto: ")),
    Number(prompt(" quarto Salto: ")),
    Number(prompt(" quinto Salto: "))
  ]

  let menor = 999, maior = -1, media = 0
  for(let i = 0; i<5; i++){
    if(menor > saltos[i]) menor = saltos[i]
    if(maior < saltos[i]) maior = saltos[i]
    media += saltos[i]
  }

  media = (media-(menor+maior))/3
  
  banco.push({nome: nome, saltos: saltos, melhor: maior, pior: menor, media: media})

  
}

for(let i = 1, j = entrada(banco, i); j != "paia"; i++, j = entrada(banco, i)){
  console.log("\nPior salto: "+banco[i-1].pior+" m")
  console.log("Melhor salto: "+banco[i-1].melhor+" m")
  console.log("Resultado final:   ")
  console.log(" "+banco[i-1].nome+": "+ banco[i-1].media.toFixed(2)+" m\n\n")
}

