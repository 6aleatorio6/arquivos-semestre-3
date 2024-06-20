// ENUM
// é quase um objeto/array que serve para definir valores de um conjunto. pode ser numerico ou string

// ele consegue autoinclementar
enum diasPaias {
  segunda = 1,
  terca,
  quarta,
}

// podemos usar o enum para limitar o que o usuario pode definir na variavel
const umDiaPaia: diasPaias = 3;

// testando se hj é paia
console.log(
  diasPaias[new Date().getDay()]
    ? "Hoje é um dia muito paia"
    : "Que bom! hj é um dia nao paia"
);

// podemos ate limitar oq um function recebe pelo enum
function MeDeUmDiaPaia(diapaia: diasPaias) {
  console.log(diasPaias[diapaia]);
}

MeDeUmDiaPaia(3); //ele apenas aceitara os numeros do enum diasPaias
