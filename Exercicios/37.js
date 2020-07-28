/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão 
geométrica que recebam como parâmetros um número n (número de termo), a1 
(o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos.*/

function progressaoAritmetica(n, a1, r) {
    let soma = 0
    for (let i = 0; i < n; i++) {
          console.log(a1 += r)
          soma += a1
    }
    console.log(`Resultado da soma Aritmetica ${soma}`)
}

function progressaoGeometrica(n, a1, r) {
    let soma = 0;
    for (let i = 0; i < n; i++) {
          console.log(a1 *= r)
          soma += a1
    }
    console.log(`Resultado da soma Geometrica ${soma}`)
}

progressaoAritmetica(5, 0, 2)
progressaoGeometrica(5, 1, 2)

