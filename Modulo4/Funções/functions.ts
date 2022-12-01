export{};

// ==> Exemplo 01 - Functions (Named function)

function somarNumeros(numero1: number,numero2:number):number {
    return numero1 + numero2;
}

const result = somarNumeros(10,5);
console.log(result);

// ==> Exemplo 02 - Função Anônima (Function Expression)

const saudar = function (mensagem:string) {
    return mensagem;
}

console.log(saudar('Ola Andrey'))

// ==> Exemplo 03 - (Arrow Function Expression)

const ola = (mensagem: string) => {
    return mensagem;
}

console.log(ola('Ola'));

// ==> Exemplo 04 - (Function constructor)

const saudar_2 = new Function('mensagem','return "Fala "+mensagem');

console.log(saudar_2('Galera'));