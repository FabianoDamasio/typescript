function somarRenda(...meses: number[]): number { //... mostra que todoas os valores q vão vim serão numbers
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0)
}

console.log(somarRenda(200, 300, 20))