"use strict";
function enviarEmail(para, assunto = 'Sem assunto', remetente) {
    console.log({
        para,
        assunto,
        remetente
    });
}
enviarEmail("fabiano_damasio@hotmail.com");
