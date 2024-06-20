//  Entendendo HERANÇA em Typescript #P4
// podemos acessar os metodos da classe pai acessando dentro do super ou do this

class User {
  protected nome: string;
  protected idade: Date;
  protected genero: "M" | "F";

  constructor(nome: string, idade: string | Date, genero: "M" | "F") {
    this.nome = nome;
    this.genero = genero;
    this.idade = new Date(idade);
  }

  /**
   * apresenta o user
   */
  protected info(): string {
    return `
        -------------------------------
         Nome: ${this.nome}
         Genero: ${this.genero == "F" ? "Feminino " : "Masculino"}
         Idade: ${this.idade.toLocaleDateString()}`;
  }
} // essa classe foi feita para ser só a base das outras

class Estudante extends User {
  private Data_matricula: number = Date.now();
  private curso: string;

  constructor(
    nome: string,
    idade: string | Date,
    genero: "M" | "F",
    curso: string
  ) {
    super(nome, idade, genero);
    this.curso = curso;
  }

  public apresentar(): void {
    console.log(
      this.info() // super. tbm funcionaria
      +
        `
         Curso: ${this.curso}
         Data da Matricula: ${new Date(
           this.Data_matricula
         ).toLocaleDateString()}
        -------------------------------`
    );
  }
}

const PaiaCabralEstudante = new Estudante(
  "Paia Cabral",
  "2021-01-02",
  "M",
  "fazendeiro"
);
PaiaCabralEstudante.apresentar();

// obs: criei outro arquivo pq o anterior estava ficando muito confuso
// ah, acho que ficou mais confuso...
