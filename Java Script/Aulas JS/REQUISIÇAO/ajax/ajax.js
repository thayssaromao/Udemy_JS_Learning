
// Função que realiza uma requisição AJAX usando XMLHttpRequest, encapsulada em uma Promise
const request = obj => {
return new Promise((resolve, reject) => { 
    const xhr = new XMLHttpRequest()// Cria um novo objeto para requisição HTTP

    xhr.open(obj.method, obj.url, true) // Inicializa a requisição com método e URL (modo assíncrono)
    xhr.send() // Envia a requisição ao servidor

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            resolve(xhr.responseText);
        }else{
            reject(xhr.statusText)
        
        }
    })})
}

document.addEventListener('click', e => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPag(elemento)
    }
})

// Função assíncrona que faz a requisição AJAX e insere o conteúdo retornado no DOM
async function carregaPag(elemento){
    const href = elemento.getAttribute('href')
    console.log(href)
    
    // Configuração da requisição (método e URL)
    const objConfig = {
        method: 'GET',
        url: href
    }

    const response = await request(objConfig)
    carregaResultado(response)
    
    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}