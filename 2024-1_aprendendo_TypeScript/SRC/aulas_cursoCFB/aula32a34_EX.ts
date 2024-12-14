// Entendendo Namespace em Typescript #P1/P2/p3
// Namespaces são uma forma de agrupar código em grupos lógicos.
// Isso ajuda a organizar o código, evitar conflitos de nomes e facilitar a reutilização.
// namespace facilita a exportação

export namespace Contas {
  export function somar(n1: number, n2: number): number {
    return n1 + n2;
  }
  export function subtrair(n1: number, n2: number): number {
    return n1 - n2;
  }
  export function multiplicar(n1: number, n2: number): number {
    return n1 * n2;
  }
  export function dividir(n1: number, n2: number): number {
    return n1 / n2;
  }
}


