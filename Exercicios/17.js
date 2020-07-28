function Aumento(plano, salario) {
    switch (plano) {
        case 'A':
            return salario += salario * (10 / 100)
            break

        case 'B':
            return salario += salario * (15 / 100)

        case 'C':
            return salario += salario * (20 / 100)
            break

            default:
                return 'Dados inválidos'
                break
    }
}

console.log(Aumento('A', 1000.00))
console.log(Aumento('B', 1000.00))
console.log(Aumento('C', 1000.00))
console.log(Aumento('D', 1000.00))