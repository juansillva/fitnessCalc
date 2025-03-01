const readlineSync = require('readline-sync');

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }
    calcularIMC() {
        return Math.floor(this.peso / (this.altura * this.altura));
    }

    classificarIMC() {
        let imc = this.calcularIMC();
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            return "Sobrepeso";
        } else {
            return "Obesidade";
        }
    }
}

let grupoDePessoas = []

function adicionarPessoa() {
    const nome = readlineSync.question('Digite seu nome: ');
    const peso = parseFloat(readlineSync.question('Seu peso (em kg): '));
    const altura = parseFloat(readlineSync.question('Digite sua altura (em metros): '));

    const pessoa = new Pessoa(nome, peso, altura);
    grupoDePessoas.push(pessoa);
    console.log(`Bem-vindo a calculadora de Índice de Massa Corporal ${nome} !\n`);
}

adicionarPessoa();

function app() {

    opcoes = ['Calcular IMC', 'Classificar IMC']
    index = readlineSync.keyInSelect(opcoes, ' Qual você escolhe? ');

    if (index === 0) {
        let pessoa = grupoDePessoas[0];
        console.log(`\nO IMC de ${pessoa.nome} é: ${pessoa.calcularIMC()}`);
    } else if (index === 1) {
        let pessoa = grupoDePessoas[0];
        console.log(`\n${pessoa.nome}, sua classificação de IMC é: ${pessoa.classificarIMC()}`);
    } else {
        console.log("\nOperação cancelada.");
    }
}

app();

