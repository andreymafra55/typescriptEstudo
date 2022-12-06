"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01
class Funcionario {
    constructor(dataNascimento) {
        this.funcionario = new Funcionario(new Date(2002, 10, 30));
        this.dataNascimento = dataNascimento;
    }
}
// ==> Exemplo 02
class Funcionario_01 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
}
;
// ==> Exemplo 03
class Funcionario_02 {
    constructor(nome, codigoFuncionario) {
        this.nome = nome;
        this.codigoFuncionario = codigoFuncionario;
    }
}
const func = new Funcionario_02('Andrey', 5555);
func.nome = 'Andrey Mafra';
console.log(func);
