'use strict'
const calcularMedia = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3  


function definirSituacao(notaFinal){
    let status 

    if(notaFinal >= 7){
        status = 'aprovado'
    }else if(notaFinal >= 5){
        status = 'recuperacao'
    }else{
        status ='reprovado'
    }
    return status
}

function limparClasses(){
    document.getElementById('resultado')
    .classList.remove('aprovado', 'recuperacao', 'reprovado')
}

function handleClick(){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const resultado = document.getElementById('resultado')

    const notaFinal = calcularMedia(nota1, nota2, nota3)
    const status = definirSituacao(notaFinal)

    resultado.textContent = `A média final do(a) aluno(a) foi: ${notaFinal} / Status do aluno(a): ${status}`
    limparClasses()
    resultado.classList.add(status)
} 