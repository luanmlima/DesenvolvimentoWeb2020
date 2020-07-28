/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números
negativos há nesse vetore imprime a quantidade no console.*/

function vetorNegativo(array) {
    let contador = 0
    for (let i = 0; i < array.length; i++) {
        if (vetor[i] < 0) {
            contador++
        }
    }
    console.log(contador)
}

let vetor = [-1, 2, 3, 4, 5, 8, -4, 6, -20, 7, 8]
vetorNegativo(vetor)