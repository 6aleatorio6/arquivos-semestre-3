// Type Inference
// ts é uma lingugem fortemente linguagem, ou seja, a variavel tem um tipo que nao pode ser mudada (any) é a universaç

let paiaNumber_4 = 10 // ela ja inferiu que é number
let paiaiString_4 = 'paia' // string

// dara erro
//    paiaNumber_4 = true 
//    paiaiString_4 = [] 



// o Type inference tambem funciona em arrays com a gente podendo definir o tipo dos valores q ela aceita
const arrayPaia1 = ["paia", 159] // ela aceita number e string
const arrayPaia2:(string|number)[] = [] // ela aceita number e string
arrayPaia1.push("a", 2)
arrayPaia2.push("a", 2)

console.log(arrayPaia1, arrayPaia2);
