"use strict";
//===> Exemplo 01 - Uso simples de tuplas em TypeScript 
let pessoa;
pessoa = ['Andrey', 'Estudante do ifpe', 20];
console.log(pessoa);
//===> Exemplo 02 - Acessando o valor da tupla 
let pessoa1;
pessoa1 = ['Andrey', 'Estudante do ifpe', 20];
console.log(pessoa1[1]);
//===> Exemplo 03 - Outra forma de usar tupals em TypeScript(com labels)
let pessoa2 = ['Andrey', 'Estudante do ifpe', 20];
console.log(pessoa2);
//===> Exemplo 04 - Usando tuplas com Spread Operator 
let listaFrutas = ['abacaxi', 'laranja', 'manga', 'caja'];
console.log(...listaFrutas);
//===> Exemplo 05 - Lista Heterogena de tupla:
let listaFrutas1 = [5, true, ...listaFrutas];
console.log(listaFrutas1);
//===> Exemplo 06 - Uso de função com tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Andrey', 'Heitor'], [20, 15]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Andrey', 'Mafra'));
console.log(criarPessoa('Andrey', 'Mafra', 'Guerra'));
