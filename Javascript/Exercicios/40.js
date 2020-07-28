/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos 
de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, 
de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

function conceitoNotas(notas) {

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 0 || notas[i] > 10) {
            console.log('Não existe notas menores que 0 ou maiores que 10')
        } else if (notas[i] <= 4.9) {
            console.log(`Sua nota é ${notas[i]} portanto tirou a nota D`)
        } else if (notas[i] <= 6.9) {
            console.log(`Sua nota é ${notas[i]} portanto tirou a nota C`)
        } else if (notas[i] <= 9.0) {
            console.log(`Sua nota é ${notas[i]} portanto tirou a nota B`)
        } else {
            console.log(`Sua nota é ${notas[i]} portanto tirou a nota A`)
        }
    }
}


let notas = [-1, 5, 3.0, 7.0, 10 ]
conceitoNotas(notas)