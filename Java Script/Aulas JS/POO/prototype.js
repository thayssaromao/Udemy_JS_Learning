// Alta performance -> evita instanciar métodos todas as vezes que um objeto é criado

//__proto__ linka o método do objeto pai ao objeto filho

//cadeia: valor -> Mercado.protype -> Object.prototype

function Mercado(item, valor){
    this.item = item
    this.valor = valor
} 

Mercado.prototype.mostraValor = function(){
    console.log(`valor de ${this.item}:`, this.valor)
}

const valor = new  Mercado('laranja', 3)
valor.mostraValor()

//Object.setPrototypeOf() -> acessar uma chave de outro Objeto

//prototype de um objeto literal <<
const banana = Object.create(Mercado.prototype)
banana.item = 'banana'
banana.valor = 8
banana.mostraValor()
