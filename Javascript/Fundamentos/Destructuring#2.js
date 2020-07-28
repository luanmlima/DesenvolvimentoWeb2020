const [a] = [10] //criando um array de nivel destructuring
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //Podemos pular valores
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //pulando entre valores e elementos (Não muito usual)
console.log(nota)