"use strict";
class computador {
    RAM_qnt;
    CPU;
    GPU;
    constructor(RAM_qnt, CPU, GPU) {
        this.RAM_qnt = RAM_qnt || 0;
        this.CPU = CPU || "";
        this.GPU = GPU || "";
    }
    get info() {
        return ` 
    ---------------------
    Memoria RAM: ${this.RAM_qnt}GB
    Processador: ${this.CPU}
    GPU: ${this.GPU}
    ---------------------`;
    }
    set set_memoriaRAM(v) {
        this.RAM_qnt = v;
    }
    set set_GPU(v) {
        this.GPU = v;
    }
    set set_CPU(v) {
        this.CPU = v;
    }
}
const PC_GAMER_paia = new computador();
PC_GAMER_paia.set_CPU = "xeon 2650 v4";
PC_GAMER_paia.set_GPU = "rx580 xingling";
PC_GAMER_paia.set_memoriaRAM = 16;
console.log(PC_GAMER_paia.info);
//# sourceMappingURL=aula25.js.map