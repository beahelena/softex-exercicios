interface EstrategiaOperacional {
  executar(a: number, b: number): number;
}

class Soma implements EstrategiaOperacional {
  executar(a: number, b: number): number {
    return a + b;
  }
}

class Subtracao implements EstrategiaOperacional {
  executar(a: number, b: number): number {
    return a - b;
  }
}

class Multiplicacao implements EstrategiaOperacional {
  executar(a: number, b: number): number {
    return a * b;
  }
}

class Calculadora {
  private estrategia: EstrategiaOperacional;

  constructor(estrategia: EstrategiaOperacional) {
    this.estrategia = estrategia;
  }

  setEstrategia(estrategia: EstrategiaOperacional): void {
    this.estrategia = estrategia;
  }

  calcular(a: number, b: number): void {
    const resultado = this.estrategia.executar(a, b);
    console.log(`Resultado da operação: ${resultado}`);
  }
}

const calculadora = new Calculadora(new Soma());

const primeiroValor = parseInt(prompt('Digite o primeiro valor:'));
const segundoValor = parseInt(prompt('Digite o segundo valor:'));
const operacao = prompt('Digite a operação (soma, subtração, multiplicação):').toLowerCase();

let estrategia: EstrategiaOperacional;

switch (operacao) {
  case 'soma':
    estrategia = new Soma();
    break;
  case 'subtração':
    estrategia = new Subtracao();
    break;
  case 'multiplicação':
    estrategia = new Multiplicacao();
    break;
  default:
    console.log('Operação inválida.');
    process.exit(1);
}

calculadora.setEstrategia(estrategia);
calculadora.calcular(primeiroValor, segundoValor);
