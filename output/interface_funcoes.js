"use strict";
let primeiraSoma;
primeiraSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
let calculadora;
function adicao(a, b) {
    return a + b;
}
const subtrair = (n1, n2) => n1 - n2;
calculadora = {
    dividir: (numero1, numero2) => {
        return numero1 / numero2;
    },
    multiplicar: (numero1, numero2) => {
        return numero1 * numero2;
    },
    somar: adicao,
    subtrair //mesma coisa q subtrair: subtrair - por ter nomes iguais
};
