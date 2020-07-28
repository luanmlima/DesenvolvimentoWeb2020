// Crie uma função que dado dois valores (passados como parâmetros)
// mostre no console a soma, subtração, multiplicação e divisão desses valores.

function Soma(valor1, valor2) {

    let resultConta = valor1 + valor2
    console.log('Adição: ' +resultConta)
    resultConta = valor1 - valor2
    console.log('Subtração: ' +resultConta)
    resultConta = valor1 * valor2
    console.log('Multiplicação: ' +resultConta)
    resultConta = valor1 / valor2
    console.log('Divisão: ' +resultConta)

}

Soma(5,5)
