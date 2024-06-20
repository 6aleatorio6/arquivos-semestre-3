// HERANÇA em Typescript


// public: pode ser acessada em qualquer lugar
// private: apenas na classe
// protected: apenas na classe ou nas classes filhas
class Pessoa {
  protected nome: string; 
  private id = (Math.random() * 1000)+1 // essa variavel só existe nessa classe

  constructor(nome: string) {
    this.nome = nome;
  }


  protected getID():number { // porem as classes filhas poderam ver o id por essse metodo
    return this.id
  }

  Apresentar(): void {
    console.log(`Olá, me chamo ${this.nome}`);
  }
}

class Pj extends Pessoa {
  private cnpj: string; 
  constructor(nome: string, cnpj: string) {
    super(nome); // o super é os parametros da classe pai
    this.cnpj = cnpj;
  }
}

class PF extends Pessoa {
  //se não delcarar o construtor ele ira usar o da classe pai
  private saldo = 100;

  PagarImposto(valor: number): void {
    if (this.saldo - valor > 0) {
      this.saldo = this.saldo - valor;
      console.log(`sobrou R$${this.saldo}`);
    } else {
      console.log("trabalhe mais");
    }
  }
}

const PaiaCabralPJ = new Pj("Paia Cabral", "12312312313232");

const PaiaCabralPF = new PF("Paia Cabral");
PaiaCabralPF.Apresentar();
PaiaCabralPF.PagarImposto(50);
