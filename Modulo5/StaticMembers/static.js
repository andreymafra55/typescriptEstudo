"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01: Propriedades Estáticas
class Funcionario {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        // nome classe + nome propriedade
        Funcionario.contratacoes++;
    }
}
Funcionario.contratacoes = 0;
const funcionario_01 = new Funcionario('Andrey', 'Mafra', 'Dev');
const funcionario_02 = new Funcionario('Andrey', 'Guerra', 'TSI');
console.log(Funcionario.contratacoes);
// ==> Exemplo 02 - Métodos estáticos
class Funcionario_01 {
    constructor(nome, sobrenome, titulo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.titulo = titulo;
        // nome classe + nome propriedade
        Funcionario_01.contratacoes++;
    }
    static retornarContratacoes() {
        return Funcionario_01.contratacoes;
    }
}
Funcionario_01.contratacoes = 0;
const funcionario_03 = new Funcionario_01('Andrey', 'Mafra', 'Dev');
const funcionario_04 = new Funcionario_01('Andrey', 'Guerra', 'TSI');
console.log(Funcionario_01.retornarContratacoes());
class Cachorro {
    constructor(nome, idade, racas) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;
        Cachorro.QTD_CACHORRO_VENDIDO++;
        console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
    exibirInformacao() {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}
Cachorro.QTD_CACHORRO_VENDIDO = 0;
const cachorro_01 = new Cachorro('Bolt', 4, ['Pitbull']);
const cachorro_02 = new Cachorro('Moana', 0.2, ['Shitzu']);
