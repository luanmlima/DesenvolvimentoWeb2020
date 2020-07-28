// Importar modulos

const moduloA = require('./ModuloA') // "./ Serve para buscar na mesma pasta
const moduloB = require('./ModuloB')

//Importando o moduloA
console.log(moduloA.ola) 
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

//Importando o moduloB
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())