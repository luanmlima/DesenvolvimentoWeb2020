let dobro = function (a) {
    return 2 * a
}


//Arrow sempre é uma funcao anonima
dobro = (a) => {
    return 2 * a
}

//Se tiver um parametro da pra tirar os () e as chaves{}
dobro = a => 2 * a
console.log(dobro(Math.PI))

//Arrow sem parametros
let ola = () => 'Olá'

