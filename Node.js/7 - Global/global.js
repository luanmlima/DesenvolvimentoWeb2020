// Testando o escopo do Node


// Criando um escopo global que pode ser lido em qualquer outro arquivo
// Freeze congela o arquivo para ele nao ser alterado em outro lugar

globalThis.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou aqui'
    },
    nome: 'Global'
})