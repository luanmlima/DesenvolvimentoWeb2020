/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function Numeros(valor) {
    switch (valor) {
        case 0:
            return 'Zero'
            break

        case 1:
            return 'Um'

        case 2:
            return 'Dois'
            break

        case 3:
            return 'Tres'
            break

        case 4:
            return 'Quatro'
            break

        case 5:
            return 'Cinco'
            break

        case 6:
            return 'Seis'
            break
        case 7:
            return 'Sete'
            break
        case 8:
            return 'Oito'
            break
        case 9:
            return 'Nove'
            break

        case 10:
            return 'Dez'
            break

        default:
            return 'Numero inválido'
            break
    }

}

console.log(Numeros(0))
console.log(Numeros(1))
console.log(Numeros(2))
console.log(Numeros(3))
console.log(Numeros(4))
console.log(Numeros(5))
console.log(Numeros(6))
console.log(Numeros(7))
console.log(Numeros(8))
console.log(Numeros(9))
console.log(Numeros(10))
console.log(Numeros(11))
