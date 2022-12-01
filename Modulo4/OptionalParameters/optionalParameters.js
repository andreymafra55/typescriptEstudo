"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id Funcionario... : ', idPessoa, '\nNome do funcionario... : ', nome);
    if (email != undefined)
        console.log('Email... : ', email);
}
informarDadosPessoa(1, 'Andrey', 'Andrey@email.com');
informarDadosPessoa(2, 'heitor');
// ==> Exemplo 02
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'Usuario não conectado');
}
mensagemLog('Atualizar Pagina.');
mensagemLog('Usuario logado com sucesso', 1);
let pessoa;
pessoa = {
    IdFuncionario: 55,
    nome: 'Andrey',
};
console.log(pessoa);
