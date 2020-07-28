// O método filter() cria um novo array com todos os elementos
// que passaram no teste implementado pela função fornecida.

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// precisa de um callback que recebe o array como parametro parar ser filtrado
console.log(produtos.filter(function (p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))