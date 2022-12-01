// ==> Exemplo 01: loop for

for (let i = 0; i < 10; i++) {
 console.log(i);  
}

// ==> Exemplo 02: for ...of - (retorna uma coleção de matriz, lista ou tupla)

const arrayNumeros = [10,20,30,40,50];

for (const i of arrayNumeros) {
    console.log(i);
}

// ==> Exemplo 03: for ...in - (retorna uma coleção de matriz, lista ou tupla)

const arrayNumeros1 = [5,4,3,2,1];
for (let i in arrayNumeros1) {
    console.log(i);
}

// sort()

const ordemNumerica:number[] = arrayNumeros1.sort();
console.log(ordemNumerica);
