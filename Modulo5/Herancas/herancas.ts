export {};

// ==> Exemplo 01

class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu...: ${distancia} metros.`);
    }
}

class Cachorro extends  Animal {
    latir(){
        console.log('Au,Au')
    }
}

const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(10);

// ==> Exemplo 02

class Pessoa {
    private nome:string;
    private sobrenome:string;

    constructor(nome:string, sobrenome:string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    retornarNomeCompleto():string { 
        return `${this.nome} ${this.sobrenome}`
    }

    apresentarPessoa():string {
        return ` Meu nome é ${this.nome} ${this.sobrenome}`;
    }
}

class Funcionario extends Pessoa {
    private funcao:string;

    constructor(nome:string, sobrenome:string,funcao:string) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }

    retornarNomeFuncao():string {
        return super.apresentarPessoa() + ` E, sou ${this.funcao}`
    }
}

const funcionario = new Funcionario('Andrey','Mafra','Dev');
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeFuncao());

