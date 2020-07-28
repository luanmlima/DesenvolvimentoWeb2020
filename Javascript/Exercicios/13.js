/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido
dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. 
Utilize a estrutura Switch.*/

function diasDaSemana(dia) {
   
        switch (dia) {
            case 1:
                return 'Domingo é fim de semana'
                break
            case 2:
                return 'Segunda-Feira é dia útil'
                break
            case 3:
                return 'Terça-Feira é dia útil'
                break
            case 4:
                return 'Quarta-Feira é dia útil'
                break
            case 5:
                return 'Quinta-Feira é dia útil'
                break
            case 6:
                return 'Sexta-Feira é dia útil'
                break
            case 7:
                return 'Sabado é fim de semana'
                break

            default:
                return 'Dia inválido'
        }
    

}

console.log(diasDaSemana(0))
console.log(diasDaSemana(1))
console.log(diasDaSemana(2))
console.log(diasDaSemana(3))
console.log(diasDaSemana(4))
console.log(diasDaSemana(5))
console.log(diasDaSemana(6))
console.log(diasDaSemana(7))
console.log(diasDaSemana(8))