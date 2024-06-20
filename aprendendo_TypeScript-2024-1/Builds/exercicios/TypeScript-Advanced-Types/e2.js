"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const ex = new _1.default(2, "Escreva um programa TypeScript que crie uma combinação de funções que aceite dois parâmetros dos tipos booleano e número. Ele retorna um valor que pode ser booleano ou um número. Use um tipo de união para conseguir isso.  ");
ex.addResolucao = function () {
    function funcaoPaia(booleano, number) {
        const numeroAleatorio = Math.floor(Math.random() * (number * 1.5));
        if (number > numeroAleatorio && booleano) {
            return !booleano;
        }
        else {
            return number + numeroAleatorio / 2;
        }
    }
    return funcaoPaia(true, 152);
};
ex.MostrarNoConsole();
//# sourceMappingURL=e2.js.map