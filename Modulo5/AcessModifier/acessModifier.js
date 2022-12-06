"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Modificador: Public
class Estudante {
}
const estudante = new Estudante();
estudante.codigoEstudante = 123;
estudante.nomeEstudante = 'Andrey';
console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);
// ==> Exemplo 02 - Modificador: Private
class Estudante_02 {
    constructor(codigoEstudante, nomeEstudante, idadeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idadeEstudante = idadeEstudante;
    }
    retornarDadosEstudante() {
        return `Codigo do Estudante: ${this.codigoEstudante}.
                Nome do Estudante: ${this.nomeEstudante}.
                Idade do Estudante: ${this.idadeEstudante}`;
    }
}
const estudante_02 = new Estudante_02(789, 'Andrey', 20);
console.log(estudante_02.retornarDadosEstudante());
// ==> Exemplo 03 - Modificador: Protected 
class Estudante_03 {
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}
class Pessoa extends Estudante_03 {
    constructor(codigoEstudante, nomeEstudante, curso) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }
    retornarDadosEstudante() {
        return `Codigo do Estudante: ${this.codigoEstudante}.
                Nome do Estudante: ${this.nomeEstudante}.
                Curso: ${this.curso}`;
    }
}
const estudante_03 = new Pessoa(456, 'Andrey', 'TSI');
console.log(estudante_03.retornarDadosEstudante());
// ==> Exemplo 04 - Modificador: Readonly
