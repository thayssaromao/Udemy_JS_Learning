document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()
    
    if(tag === 'a'){
        e.preventDefault()//The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
        loadPg(el)
    }
    
})

async function loadPg(elemento){
    const href = elemento.getAttribute('href') //method of the Element interface returns the value of a specified attribute on the element.
    
    document.getElementById('loading').hidden = false

    try {
        const response = await fetch(href)

        if(response.status !== 200)throw new Error('Erro ao carregar página')

        const html = await response.text()

        document.getElementById('loading').hidden = true

        loadResult(html)
    }catch(erro) {
        document.getElementById('loading').hidden = true

        console.log(erro)
        loadResult('Erro ao carregar a página')
    }
}

function loadResult(informacion){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = informacion
}
