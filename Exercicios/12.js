/*12) Faça um algoritmo que calcule o fatorial de um número.*/

function Fatorial(valor) {
    for (let i = valor - 1; i > 1; i--) {
        valor *= i
    }
    return valor

}
console.log(Fatorial(10))
console.log(Fatorial(7))
console.log(Fatorial(8))
console.log(Fatorial(9))
