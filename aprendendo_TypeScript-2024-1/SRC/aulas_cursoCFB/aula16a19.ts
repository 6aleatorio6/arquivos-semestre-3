// essa aula inicia sobre P.O.O



class carro {

  // podemos definir o controle de acesso com private ou public(padrao). assim permitindo ou n modificar/ler as variaveis/metodos fora da classe
  private nome: string;
  private modelo: string;
  private marca: string;
  private ano: Date;

  constructor(nome?: string, modelo?: string, marca?: string, ano?: Date) {
    this.nome = nome || "paia";
    this.ano = ano || new Date();
    this.marca = marca || "x";
    this.modelo = modelo || "x";
  }

  info(): void {
    console.log(
      ` Um das seguintes configurações foi criado:
          nome: ${this.nome}
          ano: ${this.ano.toLocaleDateString()}
          modelo: ${this.modelo}
          marca: ${this.marca}`
    );
  }
}

const celta = new carro("celtinha");
celta.info()