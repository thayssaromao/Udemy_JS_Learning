// CONSTRUCTOR FUNCTIONS

//Use uma arrow function, que mantém o this léxico 
//(ou seja, mantém o this do escopo onde foi definida — no caso, o objeto Calculadora):

//Você está usando , (vírgula) entre as declarações de métodos e propriedades (SINTAXE ERRADA)


function Calculadora() {
    // atributos públicos
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    // métodos públicos
    this.inicia = function () {
        this.cliqueBotoes();
    };

    this.calcular = function () {
        let conta = this.display.value;
        try {
            conta = eval(conta); // cuidado com eval
            if (!conta && conta !== 0) {
                alert('conta inválida');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('conta inválida');
            return;
        }
    };

    this.cliqueBotoes = function () {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if (el.classList.contains('btn-del')) {
                this.deleteOne();
            }
            if (el.classList.contains('btn-eq')) {
                this.calcular();
            }
        });
    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };

    this.clearDisplay = function () {
        this.display.value = '';
    };

    this.deleteOne = function () {
        this.display.value = this.display.value.slice(0, -1);
    };
}

const calculadora = new Calculadora();
calculadora.inicia();


