class Observador {
  private observadores: ObservadorEditor[] = [];

  adicionarObservador(observador: ObservadorEditor): void {
    this.observadores.push(observador);
  }

  removerObservador(observador: ObservadorEditor): void {
    this.observadores = this.observadores.filter(obs => obs !== observador);
  }

  notificar(evento: string): void {
    this.observadores.forEach(observador => observador.atualizar(evento));
  }
}

interface ObservadorEditor {
  atualizar(evento: string): void;
}

class EditorTexto extends Observador {
  private conteudo: string[] = [];

  obterConteudo(): string[] {
    return this.conteudo.slice();
  }

  inserirLinha(numeroLinha: number, texto: string): void {
    this.conteudo.splice(numeroLinha - 1, 0, texto);
    this.notificar('inserirLinha');
  }

  removerLinha(numeroLinha: number): void {
    this.conteudo.splice(numeroLinha - 1, 1);
    this.notificar('removerLinha');
  }
}

class TextoEditor implements ObservadorEditor {
  private editor: EditorTexto;

  constructor(editor: EditorTexto) {
    this.editor = editor;
    this.editor.adicionarObservador(this);
  }

  atualizar(evento: string): void {
    if (evento === 'inserirLinha' || evento === 'removerLinha') {
      this.exibirConteudo();
    }
  }

  private exibirConteudo(): void {
    console.log('\nConteúdo Atualizado:');
    const conteudo = this.editor.obterConteudo();
    conteudo.forEach((linha, indice) => console.log(`${indice + 1}: ${linha}`));
  }

  inserirLinha(numeroLinha: number, texto: string): void {
    this.editor.inserirLinha(numeroLinha, texto);
  }

  removerLinha(numeroLinha: number): void {
    this.editor.removerLinha(numeroLinha);
  }
}

const editor = new EditorTexto();
const editorTexto = new TextoEditor(editor);

console.log('Digite linhas de texto (Digite "EOF" para finalizar):');

let numeroLinha = 1;
while (true) {
  const entrada = prompt(`Linha ${numeroLinha}: `);
  if (entrada.toLowerCase() === 'eof') {
    break;
  }

  editorTexto.inserirLinha(numeroLinha, entrada);
  numeroLinha++;
}

console.log('\nSalvando o conteúdo...');
editor.notificar('salvar');
