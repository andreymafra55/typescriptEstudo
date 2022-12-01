//===> Exemplo 01 : Numeric Enums 

enum Idioma{
    Portugues,
    Ingles,
    Espanhol,
    Frances,
}

console.log(Idioma);

//===> Exemplo 02 : String Enums 

enum Dia {
    Segunda = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Domingo = 'DOM',
}
console.log(Dia.Segunda)

//===> Exemplo 03 : Como podemos acessa um valor de um Enum com uma chave: (Usando o const)  

const enum Comida {
    Hamburguer = 'Hamburguer',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
};

function comida(c:Comida){
    return 'Comidas que eu mais gosto '
};

console.log(comida(Comida.Hamburguer));

//===> Exemplo 04 : Quando usar Enum

enum Tarefa {
    Todo,
    Progress,
    Done,
};

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao :'Parabens!, Tarefa concluida"'
};

if(concluidaTarefa.status === Tarefa.Done){
    console.log('Enviar email:Tarefa concluida');
};