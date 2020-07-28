/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos 
e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado 
da multiplicação de cada elemento pelo número passado como parâmetro. 
A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.*/

function calculoDoVetor(array, numerico) {
    let vetorSomado = []
    for (let i = 0; i < array.length; i++) {
        vetorSomado.push(array[i] * numerico)
    }
   return vetorSomado
}

function calculoMaior(array, numerico) {
    let vetorMaior5 = []
    for (let i = 0; i < array.length; i++) {
           if(array[i] > 5){
               vetorMaior5.push(array[i] * numerico)
           }
    }
    return vetorMaior5
}

let vetor = [1, 2, 3, 4, 5]
soma = calculoDoVetor(vetor, 2)
soma2 =calculoMaior(soma, 2)
console.log(`Soma 1 ${soma} e soma 2 ${soma2}`)
