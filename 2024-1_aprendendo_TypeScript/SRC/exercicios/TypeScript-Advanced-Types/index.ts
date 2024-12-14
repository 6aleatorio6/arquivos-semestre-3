// um "menu" para escolher os exercicios

export default class Exercicios {
  private ordem: number;
  private descricao: string;
  private resolucao?: () => number | string | boolean;

  constructor(ordem: number, descricao: string) {
    this.descricao = descricao;
    this.ordem = ordem;
  }

  private rodarResolucao():string {
    let resultado: number | string | boolean;

    if (typeof this.resolucao === "function") {
      try {
        resultado = this.resolucao();
      } catch (error) {
        resultado = error as string;
      }
    } else {
      resultado = "resolução não definida";
    }

    return resultado.toString()
  }

  public MostrarNoConsole() {
    console.log(`${this.ordem}) ${this.descricao} \n    R) ${this.rodarResolucao()}`);
  }

  public set addResolucao(v: () => number | string | boolean) {
    this.resolucao = v;
  }
  
  public get getDescricao(): string {
    return this.descricao;
  }

  public get getResolucao(): string | undefined {
    return this.resolucao?.toString();
  }
}
