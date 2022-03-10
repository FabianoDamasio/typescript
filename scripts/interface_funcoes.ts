interface ISoma {
    (num1: number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1, numero2): number => {
    return numero1 + numero2
}

interface ICalculos {
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: ICalculos;

function adicao(a: number, b: number) {
    return a + b
}

const subtrair = (n1: number, n2: number) => n1 - n2;

calculadora = {
    dividir: (numero1, numero2) => {
        return numero1 / numero2
    },
    multiplicar: (numero1, numero2) => {
        return numero1 * numero2
    },
    somar: adicao,
    subtrair //mesma coisa q subtrair: subtrair - por ter nomes iguais
}