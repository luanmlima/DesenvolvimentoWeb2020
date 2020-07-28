/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor.
A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function Divisao(dividendo, divisor) {
    const resultDivisao = dividendo / divisor
    console.log(`Resultado da divisão: ${resultDivisao.toFixed(2)}`)
    const restoDivisao = dividendo % divisor
    console.log(`Resto da divisao: ${restoDivisao}`)
}

Divisao(8,3)