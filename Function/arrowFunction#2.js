function Pessoa (){
    this.idade = 0
    const selfie = this

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa