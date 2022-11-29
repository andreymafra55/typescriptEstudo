//===> Exemplo 01 - Uso simples de tuplas em TypeScript 

let pessoa:[string,string,number];
pessoa = ['Andrey','Estudante do ifpe',20];
console.log(pessoa);

//===> Exemplo 02 - Acessando o valor da tupla 

let pessoa1:[string,string,number];
pessoa1 = ['Andrey','Estudante do ifpe',20];
console.log(pessoa1[1]);

//===> Exemplo 03 - Outra forma de usar tupals em TypeScript(com labels)

let pessoa2:[string,string,number] = ['Andrey','Estudante do ifpe',20];
console.log(pessoa2);

//===> Exemplo 04 - Usando tuplas com Spread Operator 

let listaFrutas:[string, ...string[]] = ['abacaxi','laranja','manga','caja'];
console.log(...listaFrutas);

//===> Exemplo 05 - Lista Heterogena de tupla:

let listaFrutas1:[number,boolean,...string[]] = [5,true,...listaFrutas];
console.log(listaFrutas1);

//===> Exemplo 06 - Uso de função com tuplas

function listarPessoas(nomes:string[],idades:number[]) {
    return [...nomes, ...idades]
}

let resultado = listarPessoas(['Andrey','Heitor'],[20,15]);
console.log(resultado);

//===> Exemplo 07 - Labeled tuples com spread operator numa função	

type Nome = 
        | [primeiroNome:string,sobrenome:string]
        | [primeiroNome:string,nomeMeio:string,sobrenome:string]
        
function  criarPessoa(...nome:Nome) {
    return [...nome];
}

console.log(criarPessoa('Andrey','Mafra'));
console.log(criarPessoa('Andrey','Mafra','Guerra'));