"use strict";
//===> Exemplo 01 : Numeric Enums 
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Ingles"] = 1] = "Ingles";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
//===> Exemplo 02 : String Enums 
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia.Segunda);
;
function comida(c) {
    return 'Comidas que eu mais gosto ';
}
;
console.log(comida("Hamburguer" /* Comida.Hamburguer */));
//===> Exemplo 04 : Quando usar Enum
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
;
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabens!, Tarefa concluida"'
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar email:Tarefa concluida');
}
;
