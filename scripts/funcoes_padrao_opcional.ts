function enviarEmail (para: string, assunto: string = 'Sem assunto', remetente?: string): void {
    console.log({
        para,
        assunto,
        remetente
    })
}

enviarEmail("fabiano_damasio@hotmail.com")