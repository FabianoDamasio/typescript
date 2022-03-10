interface ICategoria {
    nome: string;
    id: number;
    categoriaPai?: ICategoria;
}

const frontEnd: ICategoria = {
    nome: "Front-End",
    id: 1
}

const backEnd: ICategoria = {
    nome: "Back-End",
    id: 2
}

interface IMenu {
    categorias: ICategoria[];
}

let menu: IMenu = {
    categorias: [frontEnd, backEnd]
}

interface ITodo {
    [indice: number]: string | ICategoria; //tod os tipos são strings e a outra interface e o indice é um number
}

let minhasTarefas: ITodo;

minhasTarefas = ["estudar Typescript", "estudar JavaScript", "estudar PHP 8", frontEnd,
{
    nome: "Back-End",
    id: 2
}
];

console.log(minhasTarefas[0])