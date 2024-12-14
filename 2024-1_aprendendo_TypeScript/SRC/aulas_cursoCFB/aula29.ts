// aprendendo o que é GENERICS
// generics é um parametro que define o tipo da varivel. 
// Ele é usado para criar funções, classes e interfaces que podem ser usadas com diferentes tipos de dados.

// exemplos
function comparar<T>(v1: T, v2: T): boolean {
  return v1 === v2;
}

class tipos<T1, T2> {
  tipo1: T1;
  tipo2: T2;

  constructor(tipo1: T1, tipo2: T2) {
    this.tipo1 = tipo1;
    this.tipo2 = tipo2;
  }
}



console.log(comparar<string>("10", "100"))

const tipoString = new tipos<string, boolean>("a", false)