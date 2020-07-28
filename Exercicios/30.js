/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o 
maior e menor valor dentro do vetor.*/

function percorreVetor(vetor) {
    let contMaior = vetor[0]
    let contMenor = vetor[0]
      for(List in vetor){
          if(vetor[List] > contMaior || contMaior == null){
                 contMaior = vetor[List]
          }
          else if (contMenor > vetor[List] || contMenor == null){
              contMenor = vetor[List]
          }
      }
      console.log(contMaior)
      console.log(contMenor)
      
}

let vetor = [1.5, 7, 3, 4, 5, 12.5, 2, 1.3, 30, 9]
percorreVetor(vetor)