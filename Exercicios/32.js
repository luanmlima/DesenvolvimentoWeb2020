/*32) Construir um algoritmo que calcule a média aritmética dos valores 
de um vetor de inteiros.*/

function mediaAritmetica(array) {
    let contador = 0
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        contador++
        soma = soma + array[i]
    }
    console.log(soma / contador)
}

let vetor = [5, 2, 10, 20]
mediaAritmetica(vetor)