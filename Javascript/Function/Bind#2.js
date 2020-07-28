function Pessoa() {
    this.idade = 0
    
    const selfie = this // recebe o this para alocar em outros escopos
    setInterval(function () {
        selfie.idade++ // esse this não aponta para o objeto pessoa
        console.log(selfie.idade)
    }/*.bind(this) O bind setou o this para que fosse usado nesse escopo*/, 1000) // a funcao setInterval faz com que dado uma quantidade de tempo vai sendo incrementado um valor
}

new Pessoa