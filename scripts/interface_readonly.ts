interface ICurso {
    titulo: string,
    descricao?: string,
    readonly preco: number,//transforma a prop em inalterável
    cargaHoraria: number
}

const curso: ICurso = {
    titulo: "Typescript",
    preco: 5000,
    cargaHoraria: 10
}

curso.titulo = "PHP 8"
//curso.preco = 10 não da

console.log(curso)