import Exercicios from ".";

const ex = new Exercicios(
  3,
  " Escreva um programa TypeScript que defina uma interface TypeScript Car com propriedades make e model do tipo string. Crie um tipo Bus com propriedades make e model do tipo string e uma propriedade adicional payloadCapacity do tipo number. Agora, crie um tipo Veículo que represente um Carro ou um Caminhão usando um tipo de união."
);

ex.addResolucao = function () {
  interface Car {
    make: string;
    model: string;
  }

  type Bus = {
    make: string;
    model: string;
    payloadCapacity: number;
  };

  type veiculo = Bus | Car;

  const busao: veiculo = {
    make: "a",
    model: "paia",
    payloadCapacity: 10,
  };

  
};

ex.MostrarNoConsole();
