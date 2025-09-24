//A maneira correta de lidar com elementos que são adicionados à página dinamicamente
// (como no seu caso, via fetch em main.js) é usar a delegação de eventos

// const inputNum = document.querySelector('.input-numero')
// const btnTarefa = document.querySelector('.btn-enviar')

let numeroSorteado;

/**
 * Listener principal que usa DELEGAÇÃO DE EVENTOS.
 * Ele "escuta" os cliques no documento inteiro e depois verifica
 * ONDE (em qual elemento) o clique ocorreu.
 */

document.addEventListener('click', e => {
    const el = e.target
    console.log(el)
      // Se o elemento clicado for um link <a> com o atributo 'data-link'
    if (el.tagName.toLowerCase() === 'a' && el.hasAttribute('data-link')) {
        const href = el.getAttribute('href');

        // Sorteia o número apropriado baseado no link clicado
        if (href === 'pares.html') {
            numeroSorteado = sorteiaNumPar();
            console.log(`Número PAR sorteado (para teste): ${numeroSorteado}`);
        } else if (href === 'impares.html') {
            numeroSorteado = sorteiaNumImpar();
            console.log(`Número ÍMPAR sorteado (para teste): ${numeroSorteado}`);
        }
    }

    if(el.classList.contains('btn-enviar')){
         // Só agora buscamos pelo input, pois temos certeza que ele já existe na página.
        const inputNum = document.querySelector('.input-numero');

        // Validação para garantir que um número foi sorteado e um valor foi digitado
        if (numeroSorteado === undefined) {
            alert('Por favor, escolha uma categoria (Pares ou Ímpares) para começar!');
            return;
        }
        if (!inputNum.value) {
            alert('Por favor, digite um número para testar.');
            return;
        }

        // Compara os números
        verificaNum(numeroSorteado, inputNum.value);
        
        // Limpa o input e foca nele para a próxima tentativa
        inputNum.value = '';
        inputNum.focus();
    }
})

// inputNum.addEventListener('keypress', function(e){
//     if(e.keyCode === 13){
//         if(!inputNum.value)return
//         console.log('clique em tarefa: ', e.target, inputNum.value)
        
//     }
// })

document.addEventListener('keyup', function(e) {
    // Verifica se a tecla pressionada foi 'Enter' E se o alvo do evento é o nosso input.
    if (e.key === 'Enter' && e.target.classList.contains('input-numero')) {
        // Em vez de repetir a lógica, simplesmente simulamos um clique no botão de enviar.
        const btnEnviar = document.querySelector('.btn-enviar');
        if (btnEnviar) {
            btnEnviar.click();
        }
    }
});

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
    }else if(Number(numero) > Number(numeroSorteado)){
        alert(`O número é menor que ${numero}`)
    }else if(Number(numero) < Number(numeroSorteado)){
        alert(`O número é maior que ${numero}`)
    }
    
}

