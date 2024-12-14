"use strict";
class Pessoa {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    Apresentar() {
        console.log(`Olá, me chamo ${this.nome}`);
    }
}
class Pj extends Pessoa {
    cnpj;
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }
}
class PF extends Pessoa {
    saldo = 100;
    PagarImposto(valor) {
        if (this.saldo - valor > 0) {
            this.saldo = this.saldo - valor;
            console.log(`sobrou R$${this.saldo}`);
        }
        else {
            console.log("trabalhe mais");
        }
    }
}
const PaiaCabralPJ = new Pj("Paia Cabral", "12312312313232");
const PaiaCabralPF = new PF("Paia Cabral");
PaiaCabralPF.Apresentar();
PaiaCabralPF.PagarImposto(50);
