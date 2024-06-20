import {
  useEffect,
  useRef,
  useState,
} from "react";

export default class Paginacao {
  private take = useState(1);
  private elemPorPag = useState(2);

  constructor(private listaElem: JSX.Element[], elemPorPag: number) {
    useEffect(() => {
      if (elemPorPag) this.elemPorPag[1](elemPorPag);
    }, []);
  }

  private mapElem<T>(Tloop: number, cbPush: (i: number) => T, addAoindice = 0) {
    const arrayVirgem: T[] = [];
    for (let i = 0; i < Tloop; i++) {
      arrayVirgem.push(cbPush(i + addAoindice));
    }

    return arrayVirgem;
  }

  public get getElemList(): JSX.Element[] {
    const StartTakeAtualNoArray = (this.take[0] - 1) * this.elemPorPag[0];
    return this.mapElem(
      this.elemPorPag[0],
      (i) => this.listaElem[i],
      StartTakeAtualNoArray
    );
  }

  public get IndexElem(): JSX.Element {
    const totalDePags = this.listaElem.length / this.elemPorPag[0];
    const ListaIndex = this.mapElem(
      totalDePags,
      (i) => {
        return (
          <li
            key={i}
            className={`border-b-2 ${i == this.take[0] && "text-orange-500"}`}
          >
            <button  onClick={() => this.take[1](i)}>{i}</button>
          </li>
        );
      },
      1
    );

    return (
      <section className="mt-5 takeIndexPai">
        <ul className="flex gap-3 takeIndexFihos">{ListaIndex}</ul>
      </section>
    );
  }

  public MostrarAtePorPag(max?: number): JSX.Element {
    max = max && max <= this.listaElem.length ? max : this.listaElem.length;
    const SelectedElem = useRef<HTMLSelectElement>(null);
    const option = (value: number) => {
      return (
        <option key={value} className="bg-slate-800" value={value}>
          {value} em {value}
        </option>
      );
    };
    const alterarPag = (v: number) => {
      this.elemPorPag[1](v);
      this.take[1](1);
    };

    return (
      <div className="flex ">
        <label htmlFor="selectMostrarAte" className="me-1">
          Mostrar:{" "}
        </label>
        <select
          name="selectMostrarAte"
          ref={SelectedElem}
          value={this.elemPorPag[0]}
          className="bg-transparent cursor-grab"
          onChange={({ currentTarget: { value } }) => alterarPag(Number(value))}
        >
          {this.mapElem(max, option, 1)}
        </select>
      </div>
    );
  }
}
