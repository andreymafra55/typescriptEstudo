"use strict";
//===> Exemplo 1 -  Uso de Colchetes
let frutas = ['Abacaxi', 'Manga', 'Banana', 'Limao'];
console.log(frutas[2]);
//===> Exemplo 2 -  Array Object
let frutas1 = ['Abacaxi', 'Manga', 'Banana', 'Limao'];
console.log(frutas[3]);
//===> Exemplo 3 -  Adicionando mais strings com método 'push'
let idiomas = ['portugues', 'ingles', 'espanhol'];
idiomas.push('mandarim');
console.log(idiomas);
//===> Exemplo 4 -  Identificar tamanho do array - método 'length'
let idomas1 = ['portugues', 'ingles', 'espanhol'];
console.log(idomas1.length);
//===> Exemplo 5 -  Exemplo de Array Object com Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
//===> Exemplo 6 -  Exemplo de Array com laço de iteração
let linguagens = ['Java', 'JavaScript', 'PHP', 'C#'];
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagens);
