/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade
do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
4) conveniados acima de 60 anos pagam R$130*/

function Convenio(idade) {
    if(idade <= 0){
        return 'Idade inválida'
    }
    if (idade < 10) {
        return 100.00 + 80.00
    }
    else if (idade < 30) {
        return 100.00 + 50.00
    }
    else if(idade < 60){
        return 100.00 + 95.00
    } 
    else {
        return 130 + 100
    }
}

console.log(Convenio(-1))
console.log(Convenio(2))
console.log(Convenio(15))
console.log(Convenio(32))
console.log(Convenio(64))