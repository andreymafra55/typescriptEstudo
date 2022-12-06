export {};

// ==> Exemplo 01

class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
}

const funcionario = new Funcionario(new Date(2002,10,30));

// ==> Exemplo 02

class Funcionario_01 {
    constructor(readonly dataNascimento: Date) {
      this.dataNascimento = dataNascimento;
    }
};


// ==> Exemplo 03

class Funcionario_02{
    nome: string;
    readonly codigoFuncionario: number;

    constructor(nome: string, codigoFuncionario: number) {
        this.nome = nome;
        this.codigoFuncionario = codigoFuncionario;
    }
}

const func = new Funcionario_02('Andrey',5555);
func.nome = 'Andrey Mafra';
console.log(func);

