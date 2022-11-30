//===> Exemplo 01: Tipo Any

const a:any = 20;
const b:any = ['Andrey'];

const resultado1 = a + b;
console.log(resultado1);

//===> Exemplo 02: Quando o tipo 'any' é inferido implicitamente

let frase;
frase = 'Oi pesoaal!Tudo bem?';
console.log(frase);

//===> Exemplo 03: Quando devemos usar o tipo any?

const formulario: {[campoformulario:string]:any} = {
    nome: 'Andrey',
    sobrenome:'Mafra',
    idade: '20',
};

console.log(formulario);