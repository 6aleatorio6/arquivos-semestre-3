import Paginacao from "@/components/Paginacao";
import InfoPaias, { ArrayPaiaInfo, info } from "@/components/infoPaias";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

async function fetchInfoPaia(
  State: Dispatch<SetStateAction<info[]>>,
  qntd = 1
) {
  const response = await axios.get("api/userR/" + qntd);


  // para transformar as string data em um obj Date novamente
  const data = (response.data.arrayPaia as info[]).map((e) => {
    return { ...e, nascimento: new Date(e.nascimento || "") };
  });

  State(data);
}

export default function Home() {
  let [paiaData, setData] = useState<info[]>([]);

  useEffect(() => {
    fetchInfoPaia(setData, 25);
  }, []);

  const Pag = new Paginacao(ArrayPaiaInfo(paiaData), 2);

  return (
    <main className="  w-full flex flex-col items-center   pb-5 ">
      <nav className="bg-slate-800 w-full flex py-2  ">
        <div className=" container m-auto">
          <ul className="flex gap-x-6 ">
            <li>{Pag.MostrarAtePorPag()}</li>
          </ul>
        </div>
      </nav>
      <ul className="gap-5 flex flex-col mt-9">{Pag.getElemList}</ul>
      <ul className="flex">{Pag.IndexElem}</ul>
    </main>
  );
}
