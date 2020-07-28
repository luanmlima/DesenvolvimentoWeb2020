// Testando algumas funções

// This não é estritamente igual a global pq p this nao aponta para global
//Mas para modules.exports
console.log(this === global)

// False: This não é estritamente igual a module pq o this nao aponta para module
//Mas para modules.exports
console.log(this === module)

// Os dois sao verdadeiros 
console.log(this === module.exports)
console.log(this === exports)

//Acessando o this dentro de uma função dentro de um modulo

function logThis(){
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}
logThis()