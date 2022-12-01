"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const pessoa = {
    nome: "Andrey ",
    sobreNome: "Mafra",
    idade: 20,
    funcao: "aluno do ifpe"
};
console.log(pessoa + '\n');
// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(funcioario) {
    return 'seja bem-vindo ' + funcioario.nome + '\n';
}
console.log(onboarding01({ nome: 'Andrey' }));
function onboarding02(pessoa) {
    return 'Seja bem-vindo ' + pessoa.nome + '. Sua função aqui é: ' + pessoa.funcao + '\n';
}
console.log(onboarding02({ nome: 'Andrey', funcao: 'Dev React' }));
function onboarding03(pessoa) {
    return 'Seja bem-vindo ' + pessoa.nome + '. Sua função aqui é: ' + pessoa.funcao + '. Você trabalhará com a linguagem: ' + pessoa.linguagen + '\n';
}
console.log(onboarding03({ nome: 'Andrey', funcao: 'Dev React', linguagen: 'JavaScript/TypeScript' }));
function onboarding04(pessoa) {
    return 'Seja bem-vindo ' + pessoa.nome + '. Sua função aqui é: ' + pessoa.funcao + '. Você trabalhará com a linguagem: ' + pessoa.linguagen + '\n';
}
console.log(onboarding04({ nome: 'Andrey', funcao: 'Dev React', linguagen: 'JavaScript/TypeScript' }));
function onboarding05(pessoa) {
    return 'Seja bem-vindo ' + pessoa.nome + '. Sua função aqui é: ' + pessoa.funcao + '. Você trabalhará com a linguagem: ' + pessoa.linguagen + '. Seu email será: ' + pessoa.email + '\n';
}
console.log(onboarding05({ nome: 'Andrey', funcao: 'Dev React', linguagen: 'JavaScript/TypeScript', email: 'andrey@gmail.com' }));
const filha = {
    nome: 'Andrey',
    sobrenome: 'Mafra',
    idade: 20,
};
console.log(filha + '\n');
const user = {
    nome: 'Andrey',
    email: 'andrey@gmail.com',
};
const admin = {
    nome: 'Andrey',
    email: 'andrey@gmail.com',
    admin: true,
};
function acessarSistema(user) {
    return user;
}
console.log(acessarSistema(user));
console.log(acessarSistema(admin));
/*
function acessarSistema(user: Usuario){
    return user;
}

console.log(acessarSistema(user));*/ 
