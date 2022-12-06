// ==> Exemplo 04 - Interface

interface IFuncionario {
    codigoFuncionario: number;
    nomeEmpregado: string;
}

const funcionario_01 : Readonly<IFuncionario>  = {
    codigoFuncionario: 155,
    nomeEmpregado: 'Andrey Mafra',
};

const funcionario_02 : IFuncionario  = {
    codigoFuncionario: 125,
    nomeEmpregado: 'Andrey',
}