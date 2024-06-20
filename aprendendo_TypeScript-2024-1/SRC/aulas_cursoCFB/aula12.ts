// essa aula foi sobre funções

// temos que definir o que a função retornara, ou dizer que é void se n tiver retorno

enum operadores {
  "+",
  "-",
  "*",
  "/",
}

function CalculadoraPaia(
  ...dados: [keyof typeof operadores, ...number[]]
): number {
  const arrayDeMetodosPaia: ReadonlyArray<(n1: number, n2: number) => number> =
    [
      (n1: number, n2: number): number => n1 + n2,
      (n1: number, n2: number): number => n1 - n2,
      (n1: number, n2: number): number => n1 * n2,
      (n1: number, n2: number): number => n1 / n2,
    ];

  const operador = Number(operadores[dados.shift() as operadores]);

  let resultado = dados.shift() as number;
  dados.forEach((element) => {
    resultado = arrayDeMetodosPaia[operador](resultado, element as number);
  });

  return resultado;
}

// eu sei que fiz  do modo mais dificil/burro. Mas caralho, precisava de tudo isso?

console.log(CalculadoraPaia("*", 2, 3, 5, 6, 9, 8, 4, 2, 6));
