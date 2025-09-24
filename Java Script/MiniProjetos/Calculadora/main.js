// FACTORY FUNCTIONS
function criaCalculadora (){
    return{
        //atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),



        //métodos
        inicia(){
            // alert('Bem Vindo! Iniciando Calculadora...')
            this.cliqueBotoes()//referenciar chave do objeto
        },
        calcular(){
            let conta = this.display.value
            try{
                conta = eval(conta) //eval eh perigoso, por que?
                if(!conta){
                    alert('conta inválida')
                    return
                }
                this.display.value = conta
            }catch(e){
                alert('conta inválida')
                return
            }
        },
    
        clearDisplay(){
            this.display.value = ''
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0,-1)
        },
        cliqueBotoes(){
            //this->calculadora
            document.addEventListener('click', function(e){
                const el = e.target;
                console.log(el.value)
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText) //this->document
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay() //this->document
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne() //this->document
                }
                if(el.classList.contains('btn-eq')){
                    this.calcular() //this->document
                }
            }.bind(this))
        },
        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()