const readline = require('readline-sync');

// função tradicional sem parâmetros
function saudacao() {
    console.log("Bem-vindo ao calculador de área de retângulos!");
}

// função tradicional com parâmetros e retorno de valor
function calcularAreaRetangulo(altura, largura) {
    return altura * largura;
}

// arrow function com parâmetros e retorno de valor
const exibirResultado = (area) => {
    console.log("A área do retângulo é: " + area);
}

saudacao();

const altura = parseFloat(readline.question("Digite a altura do retângulo: "));
const largura = parseFloat(readline.question("Digite a largura do retângulo: "));

const area = calcularAreaRetangulo(altura, largura);
exibirResultado(area);
