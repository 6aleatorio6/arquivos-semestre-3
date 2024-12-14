  console.log("19. Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo. Observando os termos no plural a colocação do e, da vírgula entre outros. Exemplo:\n\n326 = 3 centenas, 2 dezenas e 6 unidades\n12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16")
    let n1 = Number(prompt("n1: "))

    if(Number. isInteger(n1) && n1<=1000){
    let cen = (n1/100-(n1%100/100))
    let dez = ((n1%100)-(n1%10))/10
    let uni = n1%10
    console.log(n1 +" = "+ cen + " centenas, " + dez +" dezenas e "+uni+" unidades")
    }
    else console.log("apenas numero inteiro")