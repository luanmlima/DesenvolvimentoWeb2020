const valores = [7.7, 8.9, 6.3, 9.2] //criando um array
console.log(valores[0], valores[3]) //uma maneira de acessar valores do array por posição
console.log(valores[4]) //não existe o indice 4 entao retorna undefined indefinido

valores[4] = 10 //criei um valor para o indice 4
console.log(valores) //chamei o array atualizado
console.log(valores.length) //O lenght diz quantos elementos existem no array

valores.push({ id:3 }, false, null, 'teste') //O Push adiciona valores no array
console.log(valores) //chamei os valores atualizados

console.log(valores.pop()) //A função pop retira o ultimo valor do array
delete valores[0] //deleta os valores do array
console.log(valores)

console.log(typeof valores) // Em Javascript um array é um objeto