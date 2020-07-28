// Modos de importar em pastas antecessoras

// Modo de acessar pastas antecessoras
const moduloA = require('../../../1 - Importar&&Exportar/ModuloA') 

//Copiando o path dentro da respectiva pasta vc chega ao caminho, mas não faça assim
const moduloB = require('C:/Cod3rCurso/DesenvolvimentoWeb2020/Node.js/1 - Importar&&Exportar/ModuloB.js')

//Acessando o modulo do node_modules, note que não precisa especificar o caminho
const saudacao = require('saudacao')

//Importando PastaC
const moduloC = require('../PastaB/PastaC/index')

//Chamando os modulos
console.log(moduloA.bemVindo)
console.log(moduloB.bomDia)
console.log(saudacao.ola)
console.log(moduloC.ola2)


//Usando o modulo http

//Pega um modulo do node_modules
const http = require('http') 

//Cria uma função callback que envia uma requisição e resposta como parametro
http.createServer((req, res) =>{
    res.write('Bom dia'); //resposta da requisição
    res.end() //Fim da requisição
}).listen(8080)//Escutar na porta 8080 
