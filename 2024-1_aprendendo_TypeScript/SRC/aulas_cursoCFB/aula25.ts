// Métodos GETTER e SETTER
// o metodo get e set simplifica os metodos de pegar ou definir um valor fazendo eles serem acessados como propriedades

class computador {
  /**
   * a quantidade em GB da memoria ram
   */
  private RAM_qnt: number;
  private CPU: string;
  private GPU: string;

  constructor(RAM_qnt?: number, CPU?: string, GPU?: string) {
    this.RAM_qnt = RAM_qnt || 0;
    this.CPU = CPU || "";
    this.GPU = GPU || "";
  }

  /**
   * Ficha tecnica do PC
   */
  public get info(): string {
    // o get/set não é um modificador de acesso, ou seja, ele é diferente de public, private e protected
    return ` 
    ---------------------
    Memoria RAM: ${this.RAM_qnt}GB
    Processador: ${this.CPU}
    GPU: ${this.GPU}
    ---------------------`;
  }

  public set set_memoriaRAM(v: number) {
    this.RAM_qnt = v;
  }

  public set set_GPU(v: string) {
    this.GPU = v;
  }

  public set set_CPU(v: string) {
    this.CPU = v;
  }
}

const PC_GAMER_paia = new computador();


// o metodo "set" funciona como uma propriedade
PC_GAMER_paia.set_CPU = "xeon 2650 v4"
PC_GAMER_paia.set_GPU = "rx580 xingling"
PC_GAMER_paia.set_memoriaRAM = 16

// o get tbm
console.log(PC_GAMER_paia.info);
