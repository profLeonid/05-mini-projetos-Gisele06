'use strict'
//Jeito que eu tinha feito inicialmente:
// function removerClasses(){
//     const resultado = document.getElementById('resultado')
//     resultado.classList.remove('ate-cinco', 'cinco-dez', 'acima-dez')
// }

// function calcularDesconto(){

//     const valor = document.getElementById('valor')
//     const percentual = document.getElementById('percentual')
//     const resultado = document.getElementById('resultado')

//     let desconto = valor.value * (percentual.value / 100)
//     let valorFinal = valor.value - desconto

//     resultado.textContent = valorFinal

//     removerClasses()
//     if(percentual.value <= 4){
//         resultado.classList.add('ate-cinco')

//     }else if(percentual.value >= 5 && percentual.value <= 10){
//         resultado.classList.add('cinco-dez')

//     }else{
//         resultado.classList.add('acima-dez')
//     }
// }

//Jeito que o professor ensinou:


const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100 
const calcularPrecoFinal = (preco, valorEconomizado) => preco - valorEconomizado

// function calcularValorEconomizado(preco, desconto){
//     return preco * desconto / 100
// }

// function calcularPrecoFinal(preco, valorEconomizado){
//     return preco - valorEconomizado
// }

function selecionarCor (desconto){
    if (desconto <= 5){
        return 'desconto1'
    }else if(desconto <= 10){
        return 'desconto2'
    }else{
        return 'desconto3'
    }
}

function limparClasses(){
    document.getElementById('resultado')
    .classList.remove('desconto1', 'desconto2', 'desconto3')
}

//Pega/envia os elementos do layout
function handleClick(){
    //pega os elementos html
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value) 
    const resultado = document.getElementById('resultado')

    //calcula
    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularPrecoFinal(preco, valorEconomizado)
    const cor = selecionarCor(desconto)

    //envia a resposta
    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    limparClasses()
    resultado.classList.add(cor)
}
