class Professor {
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    seApresentar(): string {
        return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e vou lecionar ${this.materia}`
    }

    dizerNotas(...notas: number[]): number {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);

        return notasTotal / notas.length;
    }

}

const Glaucio = new Professor("Glaucio", 45, "SQL")

console.log(Glaucio.seApresentar())

const joao = new Professor("João", 25, "typescript");
console.log(joao.seApresentar());
console.log(joao.dizerNotas(8, 10, 5.5, 7.5))