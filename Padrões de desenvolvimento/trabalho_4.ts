//interface pato
interface Pato {
  grasnar(): void;
  voar(): void;
}

class PatoSelvagem implements Pato {
  grasnar(): void {
    console.log('Quack! Quack!');
  }

  voar(): void {
    console.log('Voando pelo ar');
  }
}

//interface galinha
interface Galinha {
  cacarejar(): void;
  voarBaixo(): void;
}

//implementação galinha
class GalinhaComum implements Galinha {
  cacarejar(): void {
    console.log('Cocoricó!');
  }

  voarBaixo(): void {
    console.log('Voando rente ao chão');
  }
}

//adaptador pato
class AdaptadorPato implements Galinha {
  private pato: Pato;

  constructor(pato: Pato) {
    this.pato = pato;
  }

  cacarejar(): void {
    this.pato.grasnar();
  }

  voarBaixo(): void {
    this.pato.voar();
  }
}

class AdaptadorPatoDemo {
  static executar(): void {
    const patoSelvagem: Pato = new PatoSelvagem();
    const galinhaAdaptada: Galinha = new AdaptadorPato(patoSelvagem);

    console.log('Pato selvagem:');
    patoSelvagem.grasnar();
    patoSelvagem.voar();

    console.log('\nGalinha adaptada (usando o AdaptadorPato):');
    galinhaAdaptada.cacarejar();
    galinhaAdaptada.voarBaixo();
  }
}

AdaptadorPatoDemo.executar();
