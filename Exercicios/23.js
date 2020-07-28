/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. 
Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 
e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada 
e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. 
Repita a operação até que o código lido seja negativo.*/

function verificarNotas(cod, nota1, nota2, nota3) {
    let soma = 0;
    if (nota1 > nota2 && nota1 > nota3) {
        soma = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
        imprimirNotas(cod, soma, nota1, nota2, nota3)
        return soma
    }
    else if (nota2 > nota1 && nota2 > nota3) {
        soma = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3)) / 10
        imprimirNotas(cod, soma, nota1, nota2, nota3)
        return soma
    }
    else {
        soma = ((nota3 * 4) + (nota2 * 3) + (nota1 * 3)) / 10
        imprimirNotas(cod, soma, nota1, nota2, nota3)
        return soma
    }

}

function imprimirNotas(cod, soma, nota1, nota2, nota3) {
    console.log(`Código do aluno ${cod}`)
    console.log(`Notas do aluno ${nota1}, ${nota2}, ${nota3}`)
    console.log(`Soma das médias ${soma}`)
    if (soma < 0 || soma > 10) {
        console.log('Erro de calculo')
    } else if (soma > 5) {
        console.log('Parabéns, você foi aprovado com média maior que 5')
    } else {
        console.log('Voce foi reprovado com media menor que 5')
    }
}

console.log(verificarNotas(101, 5, 5, 3))


