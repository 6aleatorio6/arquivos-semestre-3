// interface é bascimente um molde para um objeto ou classe

// exemplo de interface
interface aluno {
  nome: string;
  nascimento: Date;
  apresentar(): void; //isso seria um metodo
}

// exemplo de uso
const aluno_PAIADMS: aluno = {
  nome: "paiadms",
  nascimento: new Date("2020-1-1"),
  apresentar() {
    console.log("ola, me chamo" + this.nome);
  },
};

// exemplo de uma "interface anonima"
const alunoPAIA: {
  nome: string; 
  nascimento: Date;
} = {
  nome: "a",
  nascimento: new Date(),
};

//
// INTERFACE TAMBEM TEM O SISTEMA DE HERANÇA
interface transferido extends aluno {
  escolaPassada: string;
  data_de_transferencia?: Date;
}

const paia_cabral: transferido = {
  nome: "paiosinhoCabral",
  nascimento: new Date("1995-1-1"),
  escolaPassada: "emef paia education",
  apresentar() {
    console.log("ola, me chamo" + this.nome);
  },
};

//
// CLASSE É A MESMA COISA

class alunoDNVpaia implements aluno {
  // a classe tbm precisa seguir o molde
  nascimento: Date;
  nome: string;
  constructor(nascimento: Date, nome: string) {
    this.nascimento = nascimento;
    this.nome = nome;
  }
  apresentar() {
    console.log("ola, me chamo" + this.nome);
  }
}
