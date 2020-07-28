const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//cria um loop dentro da funcao que mostra os elementos
aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1} ${nome}`)
    console.log(array)
}) 

aprovados.forEach(nome => console.log(nome)) // recee o parametro nome e mostra o elemento

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) //recebe a const e passa como parametro no foreach