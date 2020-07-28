//O método map() invoca a função callback passada por argumento
//para cada elemento do Array e devolve um novo Array como resultado.
//O map tranforma um array em outro com os dados tranformados
//regra!! o map tem o mesmo tamanho do array normal

const nums = [1, 2, 3, 4, 5] // Array original
console.log(nums)

//Map
//Gerando um array com os valores dobrados
let resultado = nums.map(function (novoArray) {
    return novoArray * 2
})
console.log(resultado)

const soma10 = e => e + 10 //recebe o elemento e soma 10
const triplo = e => e * 3 //recebe o elemento e multiplica por 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //Transforma em dinheiro BR

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //Executou um passo de cada vez
console.log(resultado)