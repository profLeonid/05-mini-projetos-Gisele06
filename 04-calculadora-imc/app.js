'use strict'

const calcularImc = (peso, altura)  => Number(peso / (altura * altura)).toFixed(2)

function classificarImc (imc){
    let status

    if(imc <= 18.5){
        status = 'Abaixo do peso'
    }else if(imc <= 25){
        status = 'Peso normal'
    }else if(imc <= 30){
        status = 'Sobrepeso'
    }else if(imc <= 35){
        status = 'Obesidade grau I'
    }else if(imc <= 40){
        status = 'Obesidade grau II'
    }else{
        status = 'Obesidade grau III'
    }
    return status
}

function selecionarCor (status){
    if(status == 'Abaixo do peso'){
        return 'status1'
    }else if(status == 'Peso normal'){
        return 'status2'
    }else if(status == 'Obesidade grau I'){
        return 'status3'
    }else if(status == 'Obesidade grau II'){
        return 'status4'
    }else if (status == 'Obesidade grau III'){
        return 'status5'
    }
}

function limparClasses(){
    document.getElementById('resultado')
    .classList.remove('status1', 'status2', 'status3', 'status4', 'status5')
}


function handleClick(){
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)

    const imc = calcularImc(peso, altura)
    const status = classificarImc(imc)
    const cor = selecionarCor(status)

    resultado.textContent = `IMC: ${imc} / Situação: ${status}`
    limparClasses()
    resultado.classList.add(cor)


}   