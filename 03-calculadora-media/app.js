function removerClasses(){

}

function calcularMedia(){
    const nota1 = document.getElementById('nota1')
    const nota2 = document.getElementByI('nota2')
    const nota3 = document.getElementById('nota3')
    const resultado = document.getElementById('resultado')
    let status 

    let media = (nota1.value + nota2.value + nota3.value)/3

    resultado.textContent = status

    removerClasses()
    if(media >= 7){
        resultado.classList.add('')

    }else if(media >= 7){
        resultado.classList.add('')

    }else{
        resultado.classList.add('')
    }
       
}