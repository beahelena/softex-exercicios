interface Sanduiche {
  getDescricao(): string;
  getCusto(): number;
}

class FrangoAssado implements Sanduiche {
  getDescricao(): string {
    return 'Sanduíche de Frango Assado';
  }

  getCusto(): number {
    return 4.5;
  }
}

abstract class AdicionalDecorator implements Sanduiche {
  protected sanduiche: Sanduiche;

  constructor(sanduiche: Sanduiche) {
    this.sanduiche = sanduiche;
  }

  abstract getDescricao(): string;
  abstract getCusto(): number;
}

class Pepperoni extends AdicionalDecorator {
  getDescricao(): string {
    return `${this.sanduiche.getDescricao()}, Pepperoni`;
  }

  getCusto(): number {
    return this.sanduiche.getCusto() + 0.99;
  }
}

class QueijoMussarelaRalado extends AdicionalDecorator {
  getDescricao(): string {
    return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
  }

  getCusto(): number {
    return this.sanduiche.getCusto() + 2.0;
  }
}


const sanduicheBase: Sanduiche = new FrangoAssado();
const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(sanduicheBase));

console.log(`${sanduicheDecorado.getDescricao()} custa $${sanduicheDecorado.getCusto().toFixed(2)}`);
