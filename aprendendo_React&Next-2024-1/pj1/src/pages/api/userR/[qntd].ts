import { info } from "@/components/infoPaias";
import axios from "axios";
import { faker } from "@faker-js/faker/locale/pt_BR";
import type { NextApiRequest, NextApiResponse } from "next";

const criarPerson = (): info => {
  const apelido = faker.person.firstName();

  return {
    apelido,
    nome: faker.person.fullName({ firstName: apelido }),
    nascimento: faker.date.birthdate(),
    cursando: Math.random() > 0.5 ? false : true,
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { qntd: stringQntd } = req.query;
  const qntd = Number(stringQntd);

  const arrayPaia: info[] = [];

  for (let i = 0; i < qntd; i++) {
    arrayPaia.push(criarPerson());
  }

  res.status(200).json({ arrayPaia });
}
