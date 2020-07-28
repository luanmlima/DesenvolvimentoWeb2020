//Tirar algo da estrutura

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // tira os valores nome e idade da estrutura pessoa e cria duas variaveis correspondentes ao nome e idade para serem usadas
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //Também pode se criar uma nova variavel e atribuir esse valor a uma nova usando o :(nome da variavel)
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa //caso não exista o atributo da estrutura ele retorna undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero } } = pessoa // Pega e cria apenas o logradouro e numero

//caso não exista nao exista o caminho aninhado dara erro
const { conta: { agencia, conta } } = pessoa //ira dar erro 