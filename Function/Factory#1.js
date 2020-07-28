//Função factory é uma função que retorna um objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Martins'
    }
}

console.log(criarPessoa())

function criarPessoa2(nome, preco, desconto = 0.1){
    return{
        nome,
        preco
    }
}

console.log(criarPessoa2('Luan', 30.00))