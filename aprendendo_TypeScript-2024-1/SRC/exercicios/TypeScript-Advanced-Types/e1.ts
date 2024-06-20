import Exercicios from ".";

const ex = new Exercicios(
  1,
  "Escreva um programa TypeScript que declare uma variável 'resultado' que pode conter uma 'string' ou um 'número'. Agora escreva uma função que receba um argumento do tipo 'string | número | boolean' e registra seu tipo."
);

ex.addResolucao = () => {
  let resultado: string | number;

  function funcaopaia(argumentoPaia: string | number | boolean) {
    return typeof argumentoPaia;
  }

  return funcaopaia("paia")
};

ex.MostrarNoConsole();
