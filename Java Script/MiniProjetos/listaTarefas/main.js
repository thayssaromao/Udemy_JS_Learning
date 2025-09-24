const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

document.addEventListener('click',function(e){
    const elemento = e.target

    if(elemento.classList.contains('btn-tarefa')){
        if(!inputTarefa.value)return
        criaTarefa(inputTarefa.value)
    }
    console.log( e.target)
    if(elemento.classList.contains('apagar')){
        console.log(elemento.parentElement)
        elemento.parentElement.remove() //remover o elemento pai 
    }
    
})

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value)return
        // console.log('clique em tarefa: ', e.target, inputTarefa.value)
        criaTarefa(inputTarefa.value)   
    }
})

function deletarTarefa(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar') //atributo class apagar
    botaoApagar.setAttribute('title', 'Apagar tarefa')
    li.appendChild(botaoApagar)
    salvarTarefas()
}

function limparTarefa(){
    inputTarefa.value = ''
    inputTarefa.focus()
}
function criaTarefa(textoInput){
    // console.log('Tarefa: ', textoInput)
    const li = criarLi()

    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limparTarefa()
    deletarTarefa(li)
    salvarTarefas()
}

function adicionaTarefasSalvas (){
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)
    for(let tarefa of listaTarefas){
        criaTarefa(tarefa)
    }

}
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJSON)

}
function criarLi(){return li = document.createElement('li')}
adicionaTarefasSalvas()