const inputNum = document.querySelector('.input-numero')
const btnTarefa = document.querySelector('.btn-enviar')

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    console.log(el)

    // se <a href="pares.html" data-link="">Números Pares</a> sorteiaNumPar()

    if(el.classList.contains('input-numero')){
        console.log("achei o input")

        //pegar informaçao
    }

    if(el.classList.contains('btn-enviar')){
        console.log("achei o botao enviar")

        //comparar numeros
    }
})

inputNum.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputNum.value)return
        console.log('clique em tarefa: ', e.target, inputNum.value)
        
    }
})
function sorteiaNumPar(){
    const min = Math.ceil(1); 
    const max = Math.floor(9999); 
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    while(rand % 2 !== 0) {
        rand = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return rand
}

function sorteiaNumImpar(){
    const min = Math.ceil(1); 
    const max = Math.floor(9999); 
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    while(rand % 2 === 0) {
        rand = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return rand
}

function verificaNum(numeroSorteado, numero){
    if(Number(numero) === Number(numeroSorteado)){
        alert("Você acertou!")
    }else{
        alert("Você ERROU, tente outro número")
    }
}

