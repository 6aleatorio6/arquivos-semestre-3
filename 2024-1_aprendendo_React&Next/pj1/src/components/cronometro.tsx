import { HTMLAttributes, HtmlHTMLAttributes, useEffect, useState } from "react";

// eu quero fazer uma função que faça um cronometro que renderiza os segundos até a contahem finalizar e aí congele ou faça um loop. ele pode rodar uma  função no fim

/**
 *
 *   essa função pode retornar os atributos para modificar o elemento do cronometro, mas pode só ignorar n retornando nd
 * @returns
 */
export default  function Cronometro(props: {
  segundos: number;
  loop?: boolean;
  callback?: () =>
    | Promise<HTMLAttributes<Element>>
    | HTMLAttributes<Element>
    | undefined
    | null;
}) {
  let [cont, setCont] = useState(0);

  useEffect(() => {
    
    const Inter = setInterval(() => {
      setCont(cont++);

      if (cont == props.segundos + 1) {
        if (!props.loop) clearInterval(Inter);
        else cont = 0;
      }
    }, 1000);

    return () => clearInterval(Inter);
  }, []);

  

  const elem = (
    <h1
    
      className="border border-red-800 rounded py-2 px-3 text-center"
    >
      {cont}s
    </h1>
  );

  return elem;
}
