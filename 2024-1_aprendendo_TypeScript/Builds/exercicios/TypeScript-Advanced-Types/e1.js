"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const ex = new _1.default(1, "Escreva um programa TypeScript que declare uma variável 'resultado' que pode conter uma 'string' ou um 'número'. Agora escreva uma função que receba um argumento do tipo 'string | número | boolean' e registra seu tipo.");
ex.addResolucao = () => {
    let resultado;
    function funcaopaia(argumentoPaia) {
        return typeof argumentoPaia;
    }
    return funcaopaia("paia");
};
ex.MostrarNoConsole();
//# sourceMappingURL=e1.js.map