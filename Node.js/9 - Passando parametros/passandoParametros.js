//Criando um metodo que cria uma lista de nomes e uma boa semana
module.exports = function (...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!` )
}