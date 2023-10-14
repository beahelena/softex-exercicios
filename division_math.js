const readline = require('readline-sync');

try {
    const quantidadeNumeros = parseInt(readline.question("Quantos números você deseja fornecer: "));

    if (isNaN(quantidadeNumeros) || quantidadeNumeros <= 0) {
        throw new Error("Digite um número válido e maior que zero.");
    }

    let resultado = 0;

    for (let i = 0; i < quantidadeNumeros; i++) {
        const numero = parseFloat(readline.question(`Digite o número #${i + 1}: `));

        if (isNaN(numero)) {
            throw new Error(`O valor fornecido na posição #${i + 1} não é um número válido.`);
        }

        if (numero === 0) {
            throw new Error("Não é possível dividir por zero.");
        }

        resultado /= numero;
    }

    console.log(`O resultado da divisão é: ${resultado}`);
} catch (error) {
    console.error("Ocorreu um erro: " + error.message);
} finally {
    console.log("O programa foi encerrado.");
