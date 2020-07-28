// É possivel ter paramentros com varias variaveis
//Funcao soma nao tem nenhum paramentro mas é possivel chamar a funcao com  paramentros
// Utilizando o atributo arguments, que é um tipo array que pega os paramentros em seu indice na instancia
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i] // Pega todos os parametros e soma a variavel soma.
    }
    return soma
}

//instanciando valores
console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 3))

//é possivel concatenar com strings também
console.log(soma('a', 'b', 'c'))