"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exercicios {
    ordem;
    descricao;
    resolucao;
    constructor(ordem, descricao) {
        this.descricao = descricao;
        this.ordem = ordem;
    }
    rodarResolucao() {
        let resultado;
        if (typeof this.resolucao === "function") {
            try {
                resultado = this.resolucao();
            }
            catch (error) {
                resultado = error;
            }
        }
        else {
            resultado = "resolução não definida";
        }
        return resultado.toString();
    }
    MostrarNoConsole() {
        console.log(`${this.ordem}) ${this.descricao} \n    R) ${this.rodarResolucao()}`);
    }
    set addResolucao(v) {
        this.resolucao = v;
    }
    get getDescricao() {
        return this.descricao;
    }
    get getResolucao() {
        return this.resolucao?.toString();
    }
}
exports.default = Exercicios;
//# sourceMappingURL=index.js.map