abstract class Veiculo {
  constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numeroRodas: number
  ) {}

  abstract clone(): Veiculo;
  abstract represent(): string;
}

class Carro extends Veiculo {
  constructor(
    modelo: string,
    marca: string,
    cor: string,
    public numeroRodas: number,
    public numeroPortas: number
  ) {
    super(modelo, marca, cor, numeroRodas);
  }

  clone(): Veiculo {
    return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
  }

  represent(): string {
    return `Carro - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Portas: ${this.numeroPortas}`;
  }
}

class Moto extends Veiculo {
  constructor(
    modelo: string,
    marca: string,
    cor: string,
    public numeroRodas: number,
    public partidaEletrica: boolean
  ) {
    super(modelo, marca, cor, numeroRodas);
  }

  clone(): Veiculo {
    return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.partidaEletrica);
  }

  represent(): string {
    return `Moto - Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, Partida Elétrica: ${this.partidaEletrica}`;
  }
}

class Aplicacao {
  criarVeiculos(): Veiculo[] {
    const car1 = new Carro('Civic', 'Honda', 'Preto', 4, 4);
    const car2 = new Carro('Corolla', 'Toyota', 'Prata', 4, 4);
    const moto1 = new Moto('CBR1000RR', 'Honda', 'Vermelho', 2, true);
    const moto2 = new Moto('Ninja ZX-10R', 'Kawasaki', 'Verde', 2, true);

    return [car1, car2, moto1, moto2];
  }

  clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
    return veiculos.map((veiculo) => veiculo.clone());
  }

  imprimirRepresentacao(veiculos: Veiculo[]): void {
    veiculos.forEach((veiculo) => {
      console.log(veiculo.represent());
    });
  }
}

const app = new Aplicacao();
const veiculosOriginais = app.criarVeiculos();
const veiculosClonados = app.clonarVeiculos(veiculosOriginais);
app.imprimirRepresentacao(veiculosClonados);
