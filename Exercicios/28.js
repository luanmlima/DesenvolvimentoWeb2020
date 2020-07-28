/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

function lerVetor(array) {

    let contadorPar = 0
    let contadorImpar = 0
    for (pares in array) {
        if (pares % 2 == 0) {
             contadorPar ++
        } else{
             contadorImpar ++
        }
    }
    console.log(contadorPar)
    console.log(contadorImpar)
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lerVetor(array)
