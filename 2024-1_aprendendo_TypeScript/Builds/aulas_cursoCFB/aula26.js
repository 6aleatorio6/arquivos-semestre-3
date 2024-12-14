"use strict";
class Animal {
    nome;
    tipo;
    idade;
    constructor(nome, tipo, idade) {
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
    }
}
class Cachorro extends Animal {
    raça;
    constructor(nome, tipo, idade, raça) {
        super(nome, tipo, idade);
        this.raça = raça;
    }
    latir() {
        console.log("Au au!");
    }
}
const cachorroPAIA = new Cachorro("paioso", "cachorro", 10, "caramelo");
cachorroPAIA.latir();
//# sourceMappingURL=aula26.js.map