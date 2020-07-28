/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. 
Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, 
o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para 
unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado 
deverão aparecer no console.*/

function Vetores(vetorInteiro, vetorString, vetorDouble) {
    let vetorTotal = vetorInteiro.concat(vetorString, vetorDouble)
    console.log(vetorTotal)
     vetorTotal = vetorDouble.concat(vetorString, vetorInteiro)
    console.log(vetorTotal)
}


let vetorInteiro = [1, 2, 3]
let vetorString = ['Luan', 'Fran', 'Marcos']
let vetorDouble = [2.5, 3.7, 4.0]

Vetores(vetorInteiro, vetorString, vetorDouble)