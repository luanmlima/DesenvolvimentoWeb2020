let aprovados = new Array ('Bia', 'Carlos', "Ana") //não recomendavel criar arrys assim
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'//substituir valores
aprovados.push('Abia') //Criar um novo elemento no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Ordenar a lista
console.log(aprovados)

delete aprovados[1] // exclui valor mas nao reorganiza o array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')//Remover e adicionar elementos ao mesmo tempo
//o primeiro valor é o indice que deseja trabalhar, o segundo valor exclui os elementos em diante
//e o terceiro valor adiciona elemento em diante
console.log(aprovados) 