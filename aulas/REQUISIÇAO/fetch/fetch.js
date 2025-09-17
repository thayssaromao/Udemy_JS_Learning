document.addEventListener('click', e => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()
    console.log(elemento)
    if(tag === 'a'){
        e.preventDefault()
        carregaPag(elemento)
    }
})

async function carregaPag(elemento){
    const href = elemento.getAttribute('href')    

    const response = await fetch(href)
    if(response.status !== 200) throw new Error("Erro 404")
    const html = await response.text()
    carregaResultado(html)
    // fetch(href)
    // .then(response => {
    //     return response.text()
    // })
    // .then(html => carregaResultado(html))
    // .catch(e => console.log(e))
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}