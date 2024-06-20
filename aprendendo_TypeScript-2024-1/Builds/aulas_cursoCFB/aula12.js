"use strict";
var operadores;
(function (operadores) {
    operadores[operadores["+"] = 0] = "+";
    operadores[operadores["-"] = 1] = "-";
    operadores[operadores["*"] = 2] = "*";
    operadores[operadores["/"] = 3] = "/";
})(operadores || (operadores = {}));
function CalculadoraPaia(...dados) {
    const arrayDeMetodosPaia = [
        (n1, n2) => n1 + n2,
        (n1, n2) => n1 - n2,
        (n1, n2) => n1 * n2,
        (n1, n2) => n1 / n2,
    ];
    const operador = Number(operadores[dados.shift()]);
    let resultado = dados.shift();
    dados.forEach((element) => {
        resultado = arrayDeMetodosPaia[operador](resultado, element);
    });
    return resultado;
}
console.log(CalculadoraPaia("*", 2, 3, 5, 6, 9, 8, 4, 2, 6));
//# sourceMappingURL=aula12.js.map