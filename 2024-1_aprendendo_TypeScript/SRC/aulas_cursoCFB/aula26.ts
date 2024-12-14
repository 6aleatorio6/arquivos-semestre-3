// Aprendendo Classes Abstratas e readonly
// classe abstrata é uma classe que só vai ser usada como modelo, assim não permitindo ser criada uma instancia dela
// quando definimos a propriedade como readonly, a gente faz ela não poder ser alterada após o constructor

abstract class Animal {
  //agr essa clase só pode ser usada como classe pai, n sendo permitida criar uma instancia dela
  protected nome: string;
  protected tipo: string;
  protected readonly idade: number; // readonly não deixa a varivel ser alterada após o constructor

  constructor(nome: string, tipo: string, idade: number) {
    this.nome = nome;
    this.tipo = tipo;
    this.idade = idade;
  }
}

// dara erro
// animalpaia = new Animal()

class Cachorro extends Animal {
  private readonly raça: string;

  constructor(nome: string, tipo: string, idade: number, raça: string) {
    super(nome, tipo, idade);
    this.raça = raça;
  }

  latir(): void {
    console.log("Au au!");
  }
}


const cachorroPAIA = new Cachorro("paioso", "cachorro", 10, "caramelo")
cachorroPAIA.latir()