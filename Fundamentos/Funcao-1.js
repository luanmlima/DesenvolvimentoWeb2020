// Exemplo de função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // chamando a função

// Criando uma função com retorno
function Soma(a, b = 0) {
    return a + b

}

console.log(Soma(2,6)) // para imprimir o valor com retorno é melhor usar o log
console.log(Soma(2)) // retorna apenas o valor 2 pq o segundo valor é b = 0
