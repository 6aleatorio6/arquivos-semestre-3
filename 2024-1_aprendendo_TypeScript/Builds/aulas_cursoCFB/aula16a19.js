"use strict";
class carro {
    nome;
    modelo;
    marca;
    ano;
    constructor(nome, modelo, marca, ano) {
        this.nome = nome || "paia";
        this.ano = ano || new Date();
        this.marca = marca || "x";
        this.modelo = modelo || "x";
    }
    info() {
        console.log(` Um das seguintes configurações foi criado:
          nome: ${this.nome}
          ano: ${this.ano.toLocaleDateString()}
          modelo: ${this.modelo}
          marca: ${this.marca}`);
    }
}
const celta = new carro("celtinha");
celta.info();
//# sourceMappingURL=aula16a19.js.map