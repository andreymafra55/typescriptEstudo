export{}

// ==> Exemplo 01

function somarNumeros(...numeros:number[]){
    let total =0;
    numeros.forEach((numero) => (total += numero));
    return total;
}

console.log(somarNumeros(10,50,60,123,20));

// ==> Exemplo 02

function listarFrutas (frase:string,...frutas:string[]){
    return frase + '' + frutas.join(',');
} 

console.log(listarFrutas('Andrey, você precisa ir na feira para comprar...: ','\nAbacaxi','\nMelão','\nJabuticaba','\nBanana'))

// ==> Exemplo 03

class Produtos {
    public exibirProdutos(...produtos:string[]):void{
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInformatica:Produtos = new Produtos();

console.log( 'Todos os produtos do departamento de Informatica disponíveis no estoque...: ',);

departamentoInformatica.exibirProdutos(
    'Mouse',
    'Notebook',
    'USB',
    'Monitor',
    'Teclado',
    'WebCam',
  );