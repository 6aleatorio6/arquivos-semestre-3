// TUPLAS
// são arrays onde os tipos de dados em cada posiçao é definido

const arrayTuplas: [boolean, number, number | string] = [false, 10, "a"];



const arrayTuplaComSpread: [boolean, string, ...number[]] = [
  false,
  "a",
  1,
  2,
  3,
  4,
  5,
]; // podemos usar spread em tuplas
