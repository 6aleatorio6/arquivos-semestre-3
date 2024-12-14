// NULL, UNDEFINED e UNKNOWN

// Null é quando vc deseja que variavel(por exemplo um option) esteja vazio. é um tipo de dado
const paianull = null; //vc tem que definir

// undefined é quando a varivel ainda nao foi atribuida/definida
let paiaUndefined; // nd foi atribuido a ela, portanto é undefined

// unknown é uma varivel com o tipo desconhecido ela pode receber qualquer dado, porém vc não terá acesso aos métodos dele até confirmar ele de alguma forma
let paiaUnknown: unknown = 4; 

// podemos confirmar desses 2 formas
if (typeof paiaUnknown == "number") {
  paiaUnknown.toFixed();
}
(paiaUnknown as number).toFixed(); //o compilador confiara em vc para informar o tipo certo nesse caso, nao o desaponte ou enfrentara um erro
