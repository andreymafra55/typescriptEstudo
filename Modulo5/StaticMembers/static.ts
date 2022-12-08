export {};

// ==> Exemplo 01: Propriedades Estáticas

class Funcionario {
    static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome:string,
        private titulo:string
    ) {
        // nome classe + nome propriedade
        Funcionario.contratacoes++;
    }
}

const funcionario_01 = new Funcionario('Andrey','Mafra','Dev');
const funcionario_02 = new Funcionario('Andrey','Guerra','TSI');
console.log(Funcionario.contratacoes);

// ==> Exemplo 02 - Métodos estáticos

 class Funcionario_01 {
    private static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome:string,
        private titulo:string
    ) {
        // nome classe + nome propriedade
        Funcionario_01.contratacoes++;
    }

    public static retornarContratacoes() {
        return Funcionario_01.contratacoes;
    }
 }


    const funcionario_03 = new Funcionario_01('Andrey','Mafra','Dev');
    const funcionario_04 = new Funcionario_01('Andrey','Guerra','TSI');
    console.log(Funcionario_01.retornarContratacoes());

// ==> Exemplo 03 - Propriedades estáticas

type Raca = 'Pitbull' | 'Buldogue' | 'Pug' | 'Shitzu' | 'Poodle';

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static QTD_CACHORRO_VENDIDO = 0;
  
    constructor(nome: string, idade: number, racas: Raca[]) {
      this.nome = nome;
      this.idade = idade;
      this.racas = racas;
  
      Cachorro.QTD_CACHORRO_VENDIDO++;
      console.log(Cachorro.QTD_CACHORRO_VENDIDO);
    }
  
    public exibirInformacao(): void {
      console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
  }
  
  const cachorro_01 = new Cachorro('Bolt', 4, ['Pitbull']);
  const cachorro_02 = new Cachorro('Moana', 0.2, ['Shitzu']);