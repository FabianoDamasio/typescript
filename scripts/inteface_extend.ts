interface IPessoa {
    nome: string;
    id: number;
    idade: number;
}

interface IUsiario extends IPessoa {
    //nome: string; ele estende o padrão de dados de IPessoa - não é o mesmo valor
    email: string;
    senha: string;
    //id: number
}

const usuario1: IUsiario ={
    nome: "joão",
    id: 1,
    senha: "1234",
    idade: 30,
    email: "jao@gmail.com"
} 