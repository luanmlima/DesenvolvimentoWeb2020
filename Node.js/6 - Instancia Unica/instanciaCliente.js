//Chamando as instancias
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//Chamando e invocando a funcao factory com ()
const ContadorC = require('./instanciaNova')() 
const ContadorD = require('./instanciaNova')() 

//Chamando as intancias Obs: note que ele deixa salvo o valor do incremento
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

ContadorC.inc()
ContadorC.inc()
console.log(ContadorD.valor)
