export{}
// ==> Exemplo 01 - Classes
class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto() : string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Andrey','Mafra');
console.log(pessoa.nomeCompleto())

// ==> Exemplo 02 - Classes (sem constructor)

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

// Criar um objeto ou a instancia

const estudante = new Estudante();

// Inicializar o objeto:
estudante.codigoEstudante = 123;
estudante.nomeEstudante = 'Andrey';

// Acessar os campos:

console.log('Codigo do estudante...: ' + estudante.codigoEstudante + '\nNome do estudante...: ' + estudante.nomeEstudante);


// ==> Exemplo 03 - Classes (com constructor)

class Estudante1{
    codigoEstudante: number;
    nomeEstudante: string;

    // Definir o Construtor
    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    // Criar o método
    listarEstudante():void {
        console.log(console.log('Codigo do estudante...: ' + estudante.codigoEstudante + '\nNome do estudante...:  ' + estudante.nomeEstudante));
    }

}

// Acessar os campos:

const estudante1 = new Estudante1(456, 'Mafra');
console.log(estudante1.codigoEstudante + '\nNome do estudante...: ' + estudante1.nomeEstudante);