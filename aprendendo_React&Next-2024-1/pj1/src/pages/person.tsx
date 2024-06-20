import { AddSubInfo, info } from "@/components/infoPaias";
import Link from "next/link";
import { useRouter } from "next/router";

function testItem<u>(item: u, callback?: (v: u) => any) {
  return item ? (callback ? callback(item) : item) : "não definido";
}

export default function Person() {
  let { nome, nascimento: malditoDate, cursando, apelido } = (useRouter().query  as unknown as  info & {nascimento: Number});
  const nascimento = malditoDate ? new Date(Number(malditoDate)) : undefined;

  const array = [
    {
      tipo: "Nome completo",
      valor: testItem(nome),
      show: true,
    },
    {
      tipo: "apelido",
      valor: testItem(apelido),
      show: true,
    },
    {
      tipo: "nascimento",
      valor: testItem(nascimento, (v) => (v as Date).getFullYear() + " anos"),
      show: true,
    },
    {
      tipo: "idade",
      valor: testItem(
        nascimento,
        (v) => new Date().getFullYear() - (v as Date).getFullYear()
      ),
      show: true,
    },
    {
      tipo: "cursando",
      valor: testItem(
        cursando,
        (v) => v ? "Sim" : "Não"
      ),
      show: true,
    },
  ];

  return (
    <section className="p-5 bg-slate-700 flex flex-col">
      {array.map(AddSubInfo)}

      <Link
        className="bg-blue-500 text-white py-2 px-2  mt-5 rounded text-center"
        href={"/"}
      >
        Voltar
      </Link>
    </section>
  );
}
