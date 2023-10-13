const readline = require('readline-sync');

const Banco = {
    conta: "123456-7",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890",

    buscarSaldo: function () {
        return this.saldo;
    },

    deposito: function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`;
        } else {
            return "Valor de depósito inválido. O valor deve ser maior que zero.";
        }
    },

    saque: function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`;
        } else if (valor > this.saldo) {
            return "Saldo insuficiente para o saque.";
        } else {
            return "Valor de saque inválido. O valor deve ser maior que zero.";
        }
    },

    numeroConta: function () {
        return this.conta;
    }
};

while (true) {
    console.log("\nEscolha uma opção:");
    console.log("1. Buscar Saldo");
    console.log("2. Realizar Depósito");
    console.log("3. Realizar Saque");
    console.log("4. Número da Conta");
    console.log("5. Sair");

    const opcao = readline.question("Opção: ");

    switch (opcao) {
        case '1':
            console.log("Saldo Atual: R$" + Banco.buscarSaldo());
            break;
        case '2':
            const valorDeposito = parseFloat(readline.question("Digite o valor do depósito: "));
            console.log(Banco.deposito(valorDeposito));
            break;
        case '3':
            const valorSaque = parseFloat(readline.question("Digite o valor do saque: "));
            console.log(Banco.saque(valorSaque));
            break;
        case '4':
            console.log("Número da Conta: " + Banco.numeroConta());
            break;
        case '5':
            console.log("Saindo do programa.");
            process.exit(0);
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}