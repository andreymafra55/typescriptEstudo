export{}

// ==> Exemplo 01 - Uso do if

const numMax:number = 100;
let contador:number = 99;

if(contador < numMax) {
    contador ++;
}

console.log(contador)

// ==> Exemplo 02 - Uso do if

const pessoa = {
    nome: 'Maria',
    idade:18
}

const permissaoIdadeDirigir:number = 18;

if(pessoa.idade >= permissaoIdadeDirigir){
    console.log('Você pode dirigir')
}else {
    console.log('Você não pode dirigir')
}

// ==> Exemplo 03 - Uso do if-else

const pessoa2 = {
    nome: 'Joao',
    idade:17
}

const permissaoIdadeDirigir2:number = 18;

if(pessoa2.idade >= permissaoIdadeDirigir){
    console.log('Você pode dirigir')
}else {
    console.log('Você não pode dirigir')
}

//==> Exemplo 04 - if... else if

let desconto:number;
let valorCompra:number = 8;

if (valorCompra > 0 && valorCompra <= 5) {
    desconto = 5;
}else if (valorCompra > 5 && valorCompra <= 10) {
    desconto = 10;
}else {
    desconto = 15;
}

console.log('Você obteve desconto de: ' +desconto+'%');

// ==> Exemplo 05 - Ternário (? :) - if...else

const pessoa3 = {
    nome: 'Julio',
    idade:18
}

const iadeVotacao = 16;

if (pessoa3.idade >= iadeVotacao) {
    console.log('Você já pode votar')
}else {
    console.log('Você não pode votar')
}

// ==> Ternário

const podeVotar = (pessoa3.idade >= iadeVotacao) ? console.log('Você já pode votar') : console.log('Você não pode votar');

console.log(podeVotar)