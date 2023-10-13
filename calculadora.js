const readline = require('readline-sync');

function calcular(valor1, valor2, operador) {
    let resultado;
    let resto;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = Math.floor(valor1 / valor2);
            resto = valor1 % valor2;
            break;
        default:
            return "Operador inválido";
    }

    if (operador === '/') {
        return `Resultado: ${resultado}, Resto: ${resto}`;
    } else {
        return `Resultado: ${resultado}`;
    }
}

const valor1 = parseFloat(readline.question("Digite o primeiro valor: "));
const operador = readline.question("Digite o operador (+, -, *, /): ");
const valor2 = parseFloat(readline.question("Digite o segundo valor: "));

const resultado = calcular(valor1, valor2, operador);
console.log(resultado);
