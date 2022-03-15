class Pessoa {

    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {

        this.nome = nome;
        this.idade = idade;
        this.altura = altura;

    }

    toString(): string {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura`
    }
    
}

const ronaldo = new Pessoa('Ronaldo', 31, 1.80)

ronaldo.nome = "ronaldo"

console.log(ronaldo.nome)