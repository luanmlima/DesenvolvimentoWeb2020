function Pedido(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log('Cachorro quente')
            return quantidade * 3.00
            break

        case 200:
            console.log('Hambúrguer Simples')
            return quantidade * 4.00
            break

        case 300:
            console.log('Cheeseburguer')
            return quantidade * 5.50
            break

        case 400:
            console.log('Bauru')
            return quantidade * 7.50
            break

        case 500:
            console.log('Refrigerante')
            return quantidade * 3.50
            break

        case 600:
            console.log('Suco')
            return quantidade * 2.80
            break

        default:
            return 'Pedido inválido' 
            break
    }
}


console.log(Pedido(100, 2))
console.log(Pedido(200, 2))
console.log(Pedido(300, 2))
console.log(Pedido(400, 2))
console.log(Pedido(500, 2))
console.log(Pedido(600, 2))
console.log(Pedido(700, 2))