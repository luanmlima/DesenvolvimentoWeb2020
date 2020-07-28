/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e 
conte quantos números deste vetor estão no intervalo [10,20] 
(repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/ 

function percorreVetor(array){
   for(list in array){
       for(let i = list; i < array[1]; i++){
           console.log(i)
       }
   }
}


let array = [10, 20]
percorreVetor(array)
