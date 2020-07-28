const _ = require('lodash') // É muito comum que ao criar uma const para acessar uma biblioteca usar o underline.

setInterval(() => console.log(_.random(1, 1000)), 2000) //Cria uma contagem randomica entre 1 e 1000