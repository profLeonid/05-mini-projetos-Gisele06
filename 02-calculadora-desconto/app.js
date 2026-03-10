function removerClasses(){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('ate-cinco', 'cinco-dez', 'acima-dez')
}

function calcularDesconto(){

    const valor = document.getElementById('valor')
    const percentual = document.getElementById('percentual')
    const resultado = document.getElementById('resultado')

    let desconto = valor.value * (percentual.value / 100)
    let valorFinal = valor.value - desconto

    resultado.textContent = valorFinal

    removerClasses()
    if(percentual.value <= 4){
        resultado.classList.add('ate-cinco')

    }else if(percentual.value >= 5 && percentual.value <= 10){
        resultado.classList.add('cinco-dez')

    }else{
        resultado.classList.add('acima-dez')
    }
}