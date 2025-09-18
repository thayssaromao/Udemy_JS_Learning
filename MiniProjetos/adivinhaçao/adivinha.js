class Adivinha{
    
    pegaClique(){
        const input = document.querySelector('.input')
// 'input'nao esta em 'índex', esta em primos.html acessado como href
        input.addEventListener('keypress', e => {
            if(e.keyCode === 13){
                if(!input.value)return
                const numero = input.value;
                if (isNaN(numero) || numero === "") return;  // Verifica se não é número ou está vazio
                exemplo.verificaNum(sorteado, numero);            }
        })
        input.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-enviar')) {
                const numero = input.value;
                if (isNaN(numero) || numero === "") return; // Verifica se não é número ou está vazio
                exemplo.verificaNum(sorteado, numero); // Valida o número
            }
        });
        
    }

    sorteiaNumImpar(){
        const min = Math.ceil(1); 
        const max = Math.floor(9999); 
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        while(rand % 2 === 0) {
            rand = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return rand
    }

    sorteiaNumPar(){
        const min = Math.ceil(1); 
        const max = Math.floor(9999); 
        let rand = Math.floor(Math.random() * (max - min + 1)) + min;
        while(rand % 2 !== 0) {
            rand = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return rand
    }

    verificaNum(numeroSorteado, numero){
        if(Number(numero) === Number(numeroSorteado)){
            alert("Você acertou!")
        }else{
            alert("Você ERROU, tente outro número")
        }
    }


}

document.addEventListener('DOMContentLoaded', function() {
    const exemplo = new Adivinha();
    exemplo.pegaClique();
    const sorteado = exemplo.sorteiaNumImpar();
});
