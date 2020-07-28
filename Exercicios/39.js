/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos 
de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB 
e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.*/

function trocaVetores(vetor1, vetor2) {
  for (let i = 1; i < vetor1.length; i++){
    vetor1.splice(1, 0, 'Luan')
      
  }
  console.log(vetor1)
}

let vetor1 = [1, 2, 3, 4, 5]
let vetor2 = [6, 7, 8, 9, 10]

trocaVetores(vetor1, vetor2)