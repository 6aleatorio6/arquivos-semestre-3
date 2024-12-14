// Type Assertion e Typecast
// essa aula fala sobre como alegar/definir o tipo ou converter verdadeiramente

const StringPaia = "10"
const unknownPaia:unknown = 50
let NumberPaia = 1



// podemos passar essa a string para number informando que ele é number(temos fazer ela como unknown primeiro)
NumberPaia = <number><unknown>StringPaia

//porem ela continua um string, ent dara erro, podemos resolver isso convertando para number verdadeiramente
NumberPaia = parseInt(StringPaia)

// tambem só conseguimos passar o valor da variavel unknown informando o tipo dela
NumberPaia = <number>unknownPaia // ou
NumberPaia = unknownPaia as number

