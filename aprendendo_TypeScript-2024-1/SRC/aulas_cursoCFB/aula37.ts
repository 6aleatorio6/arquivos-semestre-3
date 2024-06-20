// Entendendo o modificador STATIC de POO
// o Static 


class teste {
    static variavel_glboal: string = "paia"  
    variavel_normal:string = "paia"

    constructor(algo:string){
        this.variavel_normal = algo
    }
}


// quando  vc define uma variavel como static ela basicamente vira uma propriedade da classe, podendo ser acessada sem  criar uma nova instancia
// essa propriedade é a msm em qualquer instancia/lugar q esteja, ou seja, se mudar em uma instancia X no arquivo Y em qualquer outra instancia vai ter mudado ou na classe vai ter mudado