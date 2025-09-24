class JogoDeNumeros {
    constructor() {
        this.numeroSorteado = undefined;

        // Inicia os listeners
        this.inicializarEventos();
    }

    inicializarEventos() {
        // Delegação de eventos para cliques
        document.addEventListener('click', this.handleClick.bind(this));

        // Delegação para tecla Enter no input
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleClick(event) {
        const el = event.target;

        // Clique nos links de categoria
        if (el.tagName.toLowerCase() === 'a' && el.hasAttribute('data-link')) {
            const href = el.getAttribute('href');
            this.sortearNumero(href);
        }

        // Clique no botão de enviar
        if (el.classList.contains('btn-enviar')) {
            this.processarTentativa();
        }
    }

    handleKeyUp(event) {
        if (event.key === 'Enter' && event.target.classList.contains('input-numero')) {
            const btnEnviar = document.querySelector('.btn-enviar');
            if (btnEnviar) btnEnviar.click();
        }
    }

    sortearNumero(tipo) {
        const min = 1;
        const max = 9999;
        let rand = this.gerarNumeroAleatorio(min, max);

        if (tipo === 'pares.html') {
            while (rand % 2 !== 0) rand = this.gerarNumeroAleatorio(min, max);
            console.log(`Número PAR sorteado: ${rand}`);
        } else if (tipo === 'impares.html') {
            while (rand % 2 === 0) rand = this.gerarNumeroAleatorio(min, max);
            console.log(`Número ÍMPAR sorteado: ${rand}`);
        }

        this.numeroSorteado = rand;
    }

    gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    processarTentativa() {
        const inputNum = document.querySelector('.input-numero');
        if (!inputNum) return;

        if (this.numeroSorteado === undefined) {
            alert('Por favor, escolha uma categoria (Pares ou Ímpares) para começar!');
            return;
        }

        if (!inputNum.value) {
            alert('Por favor, digite um número para testar.');
            return;
        }

        const tentativa = Number(inputNum.value);
        this.verificarNumero(tentativa);

        inputNum.value = '';
        inputNum.focus();
    }

    verificarNumero(numero) {
        if (numero === this.numeroSorteado) {
            alert("Você acertou!");
        } else if (numero > this.numeroSorteado) {
            alert(`O número é menor que ${numero}`);
        } else {
            alert(`O número é maior que ${numero}`);
        }
    }
}

// Inicializa o jogo
const jogo = new JogoDeNumeros();
