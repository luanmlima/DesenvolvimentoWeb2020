const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //O this faz parte do escopo da const pessoa
    }
}

pessoa.falar() //Chamando o objeto com a funcao falar

const falar = pessoa.falar // Guadando o valor da funcao do objeto na variavel
falar() //Conflito entre OO e funcional
const FalardePessoa = pessoa.falar.bind(pessoa) // O bind passa o objeto para resoçver o erro do this
FalardePessoa()