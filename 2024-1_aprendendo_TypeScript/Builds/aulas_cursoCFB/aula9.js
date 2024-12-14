"use strict";
var diasPaias;
(function (diasPaias) {
    diasPaias[diasPaias["segunda"] = 1] = "segunda";
    diasPaias[diasPaias["terca"] = 2] = "terca";
    diasPaias[diasPaias["quarta"] = 3] = "quarta";
})(diasPaias || (diasPaias = {}));
const umDiaPaia = 3;
console.log(diasPaias[new Date().getDay()]
    ? "Hoje é um dia muito paia"
    : "Que bom! hj é um dia nao paia");
function MeDeUmDiaPaia(diapaia) {
    console.log(diasPaias[diapaia]);
}
MeDeUmDiaPaia(3);
//# sourceMappingURL=aula9.js.map