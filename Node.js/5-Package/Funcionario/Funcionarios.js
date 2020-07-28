//Pegando a url de uma página de funcionarios
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//Tarefa criar um Filtro de mulher chinesa com o menor salario

//Comparando se o paramentro do pais for igual a china
const chinesa = f => f.pais == 'China' 

//Comparando se o paramentro passado é igual a mulheres
const mulheres = f => f.genero == 'F'

//Comparando os valores de salario
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual 
}



//Pegando o axios que faz requisições de outros servidores
const axios = require('axios')

//Pegando a const com a url e quando a requisiçao retornar chama o metodo then
// Cria uma arrow function com o nome reponse
// dentro da arrow function cria uma const funcionarios que recebe response.data que pega uma lista dos funcionarios
axios.get(url).then(response => {
    const funcionarios = response.data
    
   const func = funcionarios
   .filter(chinesa)
   .filter(mulheres)
   .reduce(menorSalario)

   console.log(func)
})




