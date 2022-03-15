"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e vou lecionar ${this.materia}`;
    }
    dizerNotas(...notas) {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);
        return notasTotal / notas.length;
    }
}
const Glaucio = new Professor("Glaucio", 45, "SQL");
console.log(Glaucio.seApresentar());
const joao = new Professor("João", 25, "typescript");
console.log(joao.seApresentar());
console.log(joao.dizerNotas(8, 10, 5.5, 7.5));
