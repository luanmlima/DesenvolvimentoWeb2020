// Armaznar uma função em uma variavel ou constante

//Criando uma funcao anonima e atribuindo a uma constante
const ImprimirSoma = function (a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b // funcao com base de arrow function
console.log(subtracao(5,2))