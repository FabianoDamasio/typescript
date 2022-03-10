interface IProduto {
    nome: string;
    preco: number;
    descricao?: string; //essa prop é opcional
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 2000,
    // descricao: "Meu not",
    dataValidade: new Date(2022, 11, 1)
}