"use strict";
//===> Exemplo 01 -Funções
function logErrror(errorMessage) {
    console.log(errorMessage);
}
logErrror("Required Field - Name!");
//===> Exemplo 02 - Arrow Function
const logErrror2 = (errorMessage) => {
    console.log(errorMessage);
};
logErrror2("Required Field - Surname!");
//===> Exemplo 03 - Variaveis
let variavelVoid;
//variavelVoid =1;
variavelVoid = null; // "strictNullChecks": false
variavelVoid = undefined;
console.log(variavelVoid);
