let valor // não inicializada
console.log(valor) // o valor será undefined pois não foi inicializada
//Console.log(valor2) // Não existe essa variavel (its not defined)

valor = null // ausência de valor
console.log(valor)

const produto = {} // criando um objeto vazio
console.log(produto.preco) // o preco não esta definido entao da o erro de undefined
console.log(produto)

produto.preco = 3.50 // inserindo um atributo no identificador preço
console.log(produto.preco)

produto.preco = null //Esse produto está sem preço

