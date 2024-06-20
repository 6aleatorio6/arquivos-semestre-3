import axios from "axios";
import Cronometro from "./cronometro";


export default function Topo() {
  return (
    <header className=" bg-slate-700 flex">
      <div className="container h-20 items-center mx-auto flex justify-between">
        <h2 className=" text-3xl">PAIA</h2>
        <Cronometro segundos={5} loop callback={async () =>{

          const infopaia = axios.get("/api/infopaias/5")


          console.log(infopaia);
          

          return {style:{
            animation: "is-rotating 0.8s ",
          }}
        }} />
      </div>
    </header>
  );
}
