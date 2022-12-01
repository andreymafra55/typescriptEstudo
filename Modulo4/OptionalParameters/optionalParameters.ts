export{}
// ==> Exemplo 01 - Optional Parameter

function informarDadosPessoa(idPessoa:number,nome:string,email?:string){
    console.log('Id Funcionario... : ',idPessoa,'\nNome do funcionario... : ',nome);

    if (email != undefined) console.log('Email... : ',email);
} 

informarDadosPessoa(1,'Andrey','Andrey@email.com');
informarDadosPessoa(2,'heitor');

// ==> Exemplo 02

function mensagemLog(mensagem: string,usuarioId?:number) {
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog,mensagem,usuarioId || 'Usuario não conectado');
}
mensagemLog('Atualizar Pagina.');
mensagemLog('Usuario logado com sucesso',1);


// ==> Exemplo 03

type Pessoa = {
    IdFuncionario:number;
    nome:string;
    idade?:number;
    email?:string;
}

let pessoa:Pessoa;

pessoa = {
    IdFuncionario: 55,
    nome: 'Andrey',
}

console.log(pessoa);