function exibeMensagem(texto: string | object | number): boolean {
    console.log(texto)

    return true
}

exibeMensagem('teste')
exibeMensagem(100)
exibeMensagem({url: "www.google.com"})

const show = (codigo: number): number | Date | object => {

    return codigo

}