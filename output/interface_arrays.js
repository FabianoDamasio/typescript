"use strict";
const frontEnd = {
    nome: "Front-End",
    id: 1
};
const backEnd = {
    nome: "Back-End",
    id: 2
};
let menu = {
    categorias: [frontEnd, backEnd]
};
let minhasTarefas;
minhasTarefas = ["estudar Typescript", "estudar JavaScript", "estudar PHP 8", frontEnd,
    {
        nome: "Back-End",
        id: 2
    }
];
console.log(minhasTarefas[0]);
