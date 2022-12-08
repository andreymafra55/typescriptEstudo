export {};

//==>Exemplo 01: Get

class Quadrado {
    private _largura = 6;
    private _altura = 12;

    get calcularQuadrado() {
        return this._largura * this._altura;
    }
}

console.log(new Quadrado().calcularQuadrado);

//==> Exemplo 02: Set

class Pessoa {
    nome:string;

    retornarNomePessoa(setNomePessoa:string) {
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Andrey');
console.log(pessoa.nome);

//==>Exemplo 03: Get [explicação mais densa]

class Estudante {
    private _nome = 'Andrey Mafra'; 
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante() {
        return this._nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);

//==>Exemplo 04: Set/Get [explicação mais densa]

class Estudante_01 {
    nome: string; 
    semestre: number;
    curso: string;

   constructor(nome: string, semestre: number, curso: string) {
    this.nome = nome;
    this.semestre = semestre;
    this.curso = curso;
   }

   public get cursos() {
    return this.curso
   }

   public set cursos(setCurso: string) {
    this.curso = setCurso;
   }

}

const estudante_01 = new Estudante_01('Andrey',3,'Sistemas para internet');
console.log(estudante_01);

//Setter call
estudante_01.curso = 'TSI';

//Getter call

console.log('Curso atualizado',estudante_01.curso);