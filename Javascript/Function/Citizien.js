//Função em JS é first-Class Object (Citiziens)

//Criar uma função Literal
function fun1() { }

//Armazenar em uma variavel
const fun2 = function () { } // Função sem nome é uma função anônima

//Armazenar uma função dentro de um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa!' }
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando') })

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(5, 6)(10)