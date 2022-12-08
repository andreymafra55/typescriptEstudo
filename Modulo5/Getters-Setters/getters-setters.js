"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//==>Exemplo 01: Get
class Quadrado {
    constructor() {
        this._largura = 6;
        this._altura = 12;
    }
    get calcularQuadrado() {
        return this._largura * this._altura;
    }
}
console.log(new Quadrado().calcularQuadrado);
//==> Exemplo 02: Set
class Pessoa {
    retornarNomePessoa(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Andrey');
console.log(pessoa.nome);
//==>Exemplo 03: Get [explicação mais densa]
class Estudante {
    constructor() {
        this._nome = 'Andrey Mafra';
    }
    get nomeEstudante() {
        return this._nome;
    }
}
const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);
//==>Exemplo 04: Set/Get [explicação mais densa]
class Estudante_01 {
    constructor(nome, semestre, curso) {
        this.nome = nome;
        this.semestre = semestre;
        this.curso = curso;
    }
    get cursos() {
        return this.curso;
    }
    set cursos(setCurso) {
        this.curso = setCurso;
    }
}
const estudante_01 = new Estudante_01('Andrey', 3, 'Sistemas para internet');
console.log(estudante_01);
//Setter call
estudante_01.curso = 'TSI';
//Getter call
console.log('Curso atualizado', estudante_01.curso);
