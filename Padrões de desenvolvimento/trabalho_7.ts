class SistemaSeguranca {
  private static instancia: SistemaSeguranca;
  private senhaBaseSecreta: string = "TopSecretPassword123";

  private constructor() {}

  static obterInstancia(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  acessarBaseSecreta(senhaInserida: string): void {
    if (senhaInserida === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
    } else {
      console.log("Acesso negado! Senha incorreta. Intruso detectado!");
    }
  }
}

const sistemaSeguranca = SistemaSeguranca.obterInstancia();

//senha correta
sistemaSeguranca.acessarBaseSecreta("TopSecretPassword123");

//senha incorreta
sistemaSeguranca.acessarBaseSecreta("SenhaIncorreta456");
