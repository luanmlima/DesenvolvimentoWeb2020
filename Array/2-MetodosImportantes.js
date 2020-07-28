const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // mesmo sendo uma constante eu posso adicionar elementos
// só não pode atribuir valores

pilotos.pop()//remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos) //Adiciona um elemento na primeira posicao

//splice pode adicionar e remover elementos

//adicionar 
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) //massa saiu
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // elementos a partir do indice indicado e cria um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // o indice 4 nao entra o array apenas de 1 ate 3
console.log(algunsPilotos2)