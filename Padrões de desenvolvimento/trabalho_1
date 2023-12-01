interface Computador {
  ram: number;
  hdd: number;
  cpu: number;
  tipo: string;
  toString(): string;
}

class FabricaComputador {
  criarComputador(tipo: string, ram: number, hdd: number, cpu: number): Computador {
    if (tipo === 'pc') {
      return new PC(ram, hdd, cpu);
    } else if (tipo === 'server') {
      return new Servidor(ram, hdd, cpu);
    } else {
      throw new Error('Tipo de computador não suportado');
    }
  }
}

class PC implements Computador {
  constructor(public ram: number, public hdd: number, public cpu: number) {
    this.tipo = 'pc';
  }

  tipo: string;

  toString(): string {
    return `PC - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}

class Servidor implements Computador {
  constructor(public ram: number, public hdd: number, public cpu: number) {
    this.tipo = 'server';
  }

  tipo: string;

  toString(): string {
    return `Servidor - RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
  }
}
