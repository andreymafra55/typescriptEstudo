"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Default Parameters
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
console.log(descontoCompra(100));
// ==> Exemplo 02 
function exibirMensagem(nome, saudar = "Fala,") {
    return saudar + nome;
}
console.log(exibirMensagem('Andrey'));
// ==> Exemplo 03 
function exirbirNome(nome, sobrenome = 'Mafra') {
    return nome + ' ' + sobrenome;
}
const result = exirbirNome('Andrey');
const result2 = exirbirNome('Andrey', undefined);
const result3 = exirbirNome('Andrey', 'Guerra');
console.log(result);
console.log(result2);
console.log(result3);
