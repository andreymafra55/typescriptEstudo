"use strict";
//===> Exemplo 1: Tipo Unknown
let valorVariavel;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Andrey';
//===> Exemplo 2: Erro ao tentar atribuir uma valor do tipo 'unknown' a outros tipos
/*
let valor:unknown;

let valor1:boolean = valor;
*/
//===> Exemplo 3: Diferença entre: 'any' vs 'unknown'
/*
let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed(2));
console.log(algumaCoisaUnknown.toFixed(2));*/
