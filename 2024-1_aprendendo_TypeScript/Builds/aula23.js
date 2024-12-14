"use strict";
class User {
    nome;
    idade;
    genero;
    constructor(nome, idade, genero) {
        this.nome = nome;
        this.genero = genero;
        this.idade = new Date(idade);
    }
    info() {
        return `
        -------------------------------
         Nome: ${this.nome}
         Genero: ${this.genero == "F" ? "Feminino " : "Masculino"}
         Idade: ${this.idade.toLocaleDateString()}`;
    }
}
class Estudante extends User {
    Data_matricula = Date.now();
    curso;
    constructor(nome, idade, genero, curso) {
        super(nome, idade, genero);
        this.curso = curso;
    }
    apresentar() {
        console.log(this.info()
            +
                `
         Curso: ${this.curso}
         Data da Matricula: ${new Date(this.Data_matricula).toLocaleDateString()}
        -------------------------------`);
    }
}
const PaiaCabralEstudante = new Estudante("Paia Cabral", "2021-01-02", "M", "fazendeiro");
PaiaCabralEstudante.apresentar();
//# sourceMappingURL=aula23.js.map