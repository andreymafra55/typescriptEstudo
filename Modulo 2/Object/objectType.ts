export {};

// ==> Exemplo 01 -> Exemplo básico do uso do Type Object

const pessoa = {
    nome:"Andrey ",
    sobreNome:"Mafra",
    idade: 20,
    funcao: "aluno do ifpe"
}
console.log(pessoa+'\n');

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)

function onboarding01(funcioario:{nome:string}) {
    return 'seja bem-vindo '+funcioario.nome+'\n';
}

console.log(onboarding01({nome: 'Andrey'}));

// ==> Exemplo 03 -> object nomeados

interface Pessoa {
    nome: string;
    funcao: string;
}

function onboarding02(pessoa: Pessoa) {
    return 'Seja bem-vindo '+ pessoa.nome+'. Sua função aqui é: '+pessoa.funcao+'\n';
}

console.log(onboarding02({nome:'Andrey',funcao:'Dev React'}));

// ==> Exemplo 04 -> object como type alias

type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagen: string;
}

function onboarding03(pessoa: Pessoa03) {
    return 'Seja bem-vindo '+ pessoa.nome+'. Sua função aqui é: '+pessoa.funcao+'. Você trabalhará com a linguagem: ' + pessoa.linguagen+'\n';
}

console.log(onboarding03({nome:'Andrey',funcao:'Dev React',linguagen:'JavaScript/TypeScript'}));

// ==> Exemplo 05 -> usando optional no object

interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagen: string;
    email?: string;
}

function onboarding04(pessoa: Pessoa04) {
    return 'Seja bem-vindo '+ pessoa.nome+'. Sua função aqui é: '+pessoa.funcao+'. Você trabalhará com a linguagem: ' + pessoa.linguagen+'\n';
}

console.log(onboarding04({nome:'Andrey',funcao:'Dev React',linguagen:'JavaScript/TypeScript'}));

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o '
//readonly)

interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagen: string;
    readonly email: string;
}

function onboarding05(pessoa: Pessoa05) {
    return 'Seja bem-vindo '+ pessoa.nome+'. Sua função aqui é: '+pessoa.funcao+'. Você trabalhará com a linguagem: ' + pessoa.linguagen+'. Seu email será: '+pessoa.email+'\n';
}

console.log(onboarding05({nome:'Andrey',funcao:'Dev React',linguagen:'JavaScript/TypeScript',email:'andrey@gmail.com'}));

// ==> Exemplo 07 -> tipos de extensões (heranças)

interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Pai,Mae{
    idade: number;
}

const filha: Filha = {
    nome: 'Andrey',
    sobrenome:'Mafra',
    idade: 20,
}

console.log(filha+'\n');

// ==> Exemplo 08 -> Tipos de Interseções

interface Cachorro {
    raca: string;
}

interface Gato {
    raca: string;
}

type Animal = Cachorro & Gato;

// Exemplo 09 - Generic Objects

type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const user: Usuario = {
    nome: 'Andrey',
    email: 'andrey@gmail.com',
}

const admin: Admin = {
    nome: 'Andrey',
    email: 'andrey@gmail.com',
    admin: true,
}

function acessarSistema<T>(user: T): T{
    return user;
}

console.log(acessarSistema<Usuario>(user));
console.log(acessarSistema<Admin>(admin));
/*
function acessarSistema(user: Usuario){
    return user;
}

console.log(acessarSistema(user));*/