"use strict";
var Contas;
(function (Contas) {
    function somar(n1, n2) {
        return n1 + n2;
    }
    Contas.somar = somar;
    function subtrair(n1, n2) {
        return n1 - n2;
    }
    Contas.subtrair = subtrair;
    function multiplicar(n1, n2) {
        return n1 * n2;
    }
    Contas.multiplicar = multiplicar;
    function dividir(n1, n2) {
        return n1 / n2;
    }
    Contas.dividir = dividir;
})(Contas || (Contas = {}));
console.log(Contas.somar(50, 2));
console.log(Contas.multiplicar(50, 2));
console.log(Contas.dividir(50, 2));
console.log(Contas.subtrair(50, 2));
//# sourceMappingURL=aula32a33.js.map