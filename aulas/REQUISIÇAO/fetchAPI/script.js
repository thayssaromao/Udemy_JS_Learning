document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPag(elemento);
    }
});

async function carregaPag(elemento) {
    const href = elemento.getAttribute('href');

    try {
        const response = await fetch(href);
        if (response.status !== 200) throw new Error("Erro ao carregar a página");

        const html = await response.text();
        carregaResultado(html);
        console.log('passou')
    } catch (erro) {
        console.log(erro);
        carregaResultado('<p><strong>Erro ao carregar a página.</strong></p>');
    }
}

function carregaResultado(conteudo) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = conteudo;
}
