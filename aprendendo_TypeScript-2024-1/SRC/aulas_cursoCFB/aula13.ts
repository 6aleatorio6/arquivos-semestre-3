// essa aula fala sobre parametros opcionais e padrões em uma função

// o "?" diz que esse parametro é opcional, ou seja, pode ser undefined
function Seu_nomePaia(nome?: string): void {
  console.log(
    nome
      ? `Olá ${nome}, agr curve-se diante de PAIA CABRAL`
      : "Como ousa se negar a dizer seu nome! Lhe desafio a um x1 no Xadrez de Fadas!"
  );
}


Seu_nomePaia()
Seu_nomePaia("Leo")