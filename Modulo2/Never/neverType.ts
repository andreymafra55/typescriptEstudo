// ==> Exemplo 01 : Never - Throw Exception

function error(message: string) :never {
    throw new Error(message);
}

console.log(error("Erro de mensagem 01"));

// ==> Exemplo 02 : Never inferido automaticamente

function rejectMessage(){
    return error("Error de mensagem 02");
}

console.log(rejectMessage());
// ==> Exemplo 03 : Função que contém loop infinito retorna o tipo 'never'

const loopInfinito = function loop(){ //Não rodar essa função 
    while (true) {
        console.log("Oi");
    }
}

// ==> Exemplo 04 : Never x void  

const varVoid: void = null;

const varNever: never = null;
