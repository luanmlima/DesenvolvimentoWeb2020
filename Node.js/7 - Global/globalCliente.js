//Importando o global
require('./global')

//chamando diretamente a saudacao
console.log(MinhaApp.saudacao())

//Esses atributos nao deveriam estar abertos para mudança
MinhaApp.nome = 'Eita'
console.log(MinhaApp.nome)