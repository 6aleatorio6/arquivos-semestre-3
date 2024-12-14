"use strict";
const aluno_PAIADMS = {
    nome: "paiadms",
    nascimento: new Date("2020-1-1"),
    apresentar() {
        console.log("ola, me chamo" + this.nome);
    },
};
const alunoPAIA = {
    nome: "a",
    nascimento: new Date(),
};
const paia_cabral = {
    nome: "paiosinhoCabral",
    nascimento: new Date("1995-1-1"),
    escolaPassada: "emef paia education",
    apresentar() {
        console.log("ola, me chamo" + this.nome);
    },
};
class alunoDNVpaia {
    nascimento;
    nome;
    constructor(nascimento, nome) {
        this.nascimento = nascimento;
        this.nome = nome;
    }
    apresentar() {
        console.log("ola, me chamo" + this.nome);
    }
}
//# sourceMappingURL=aula27a28.js.map