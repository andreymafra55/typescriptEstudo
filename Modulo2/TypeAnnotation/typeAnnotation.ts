//===> Variaveis
let nome: string = 'Andrey'
console.log(nome)

//===> Arrays
let animais: string[] = ['Macaco,Tigre,Leao']
console.log(animais)

//===> Objetos
let carro: {
    modelo: string;
    ano: number;
    cor: string;
}

carro = {
    modelo: 'siena',
    ano: 2010,
    cor: 'Preto'
}
console.log(carro)


//===> Function 
function somarNumeros( num1: number, num2: number){
    return num1 + num2
}

let result = somarNumeros(10,20)
console.log(result)