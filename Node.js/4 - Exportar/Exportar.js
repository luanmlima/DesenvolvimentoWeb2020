// Alguns detalhes sobre exportação dos módulos

//Os modos de exportação são iguais
console.log(module.exports === this)
console.log(module.exports === exports)

//Modos de exportar valores
this.a = 1
exports.b = 3
module.exports.c = 2

module.exports = {
    carro: 'Furai'
}

// Importa todos como um objeto de exports se tiver só ele
console.log(module.exports)
