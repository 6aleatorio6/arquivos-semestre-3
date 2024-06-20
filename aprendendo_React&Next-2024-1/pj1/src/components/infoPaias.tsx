import Link from "next/link";
import { ParsedUrlQueryInput, stringify } from "querystring";
import { CSSProperties } from "react";

const girar: CSSProperties = {
  width: "50px",
  height: "50px",
  transform: "rotate(360deg)",
  borderWidth: "10px",
  position: "relative",
  borderRadius: "50%",
  borderColor: "lavender",
  borderRightColor: "purple",
  animation: "is-rotating 1s infinite",
};

function BracinhosGiratorios(props: {
  B: string;
  L: string;
  C: string;
  T?: string;
}) {
  const { B, L, C, T } = props;
  return (
    <b
      style={{
        position: "absolute",
        bottom: B + "px",
        left: L + "px",
        fontSize: "20px",
        transform: `rotate(${T}deg)`,
      }}
    >
      {C}
    </b>
  );
}

export function AddSubInfo(
  probs: {
    tipo: string;
    valor?: string | number | boolean;
    show?: any;
  },
  key?: number
) {
  const { tipo, valor, show } = probs;

  return (
    typeof show !== "undefined" &&
    valor && (
      <h3 className="text-2xl" key={key}>
        {tipo}: <b className="text-amber-400">{valor}</b>{" "}
      </h3>
    )
  );
}

export interface info {
  nome?: string;
  apelido?: string;
  nascimento?: Date;
  cursando?: boolean;
}
export default function InfoPaias(paiaOBJ: info, key: number) {
  const { nome, apelido, nascimento, cursando } = paiaOBJ;
  return (
    <section
      key={key}
      className="container  flex flex-col gap-y-3 border-indigo-900 border-2 bg-gray-700 rounded-lg max-w-5xl"
    >
      <div className="  px-3 ">
        <h2 className="  p-3 text-6xl text-sky-400 font-extrabold  flex justify-between">
          {nome}
          <div className=" mt-8 me-10" style={girar}>
            <BracinhosGiratorios B="50" L="2" C="|" T="90" />
            <BracinhosGiratorios B="0" L="-50" C="\_/" T="90" />
            <BracinhosGiratorios B="0" L="50" C="\_/" T="-90" />
            <BracinhosGiratorios B="-50" L="2" C="|" T="90" />
            <BracinhosGiratorios B="5" L="5" C=":D" T="90" />
          </div>
        </h2>
        {(apelido || nascimento || cursando) && (
          <h3 className="text-4xl  mb-2 ">Info Basicas</h3>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  ms-9">
        <AddSubInfo tipo="apelido" valor={apelido} show={apelido} />
        <AddSubInfo
          tipo="cursando"
          valor={cursando ? "SIM" : "Não"}
          show={cursando}
        />
        <AddSubInfo
          tipo="idade"
          show={nascimento}
          valor={`${
            new Date().getFullYear() - (nascimento?.getFullYear() || 0)
          } anos`}
        />
        <AddSubInfo
          tipo="nascimento"
          show={nascimento}
          valor={nascimento?.toLocaleDateString()}
        />
      </div>
      <Link
        className=" bg-blue-500 text-white py-1  rounded text-center m-2"
        href={{
          pathname: "person",
          query: { ...paiaOBJ, nascimento: nascimento?.getTime() },
        }}
      >
        Ver mais
      </Link>
    </section>
  );
}

export function ArrayPaiaInfo(listaPaia: info[]) {
  return listaPaia.map((info, i) => {
    return InfoPaias(info, i);
  });
}
