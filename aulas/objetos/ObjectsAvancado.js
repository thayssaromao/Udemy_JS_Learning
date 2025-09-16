// Mark:  Moldes de como usar objetos - Factory Functions, Classes e Constructor Functions (padroes de projeto)

// const pessoa1 = new Object()
// pessoa1.nome = 'Luiz'
// pessoa1.idade = 9
// pessoa1.estudante = true
// for (let chave in pessoa1){
     //console.log(`${chave}:`,pessoa1[chave])
// }

function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

    Object.freeze(this) //bloqueia alteraçao de todo o objeto
}

const p1 = new Pessoa('Thayssa', 'Romao', 21)

//p1 ='outas coisa' //tenta alterar referencia de memoria (nao da certo por causa do const)
p1.idade = 9
//console.log(p1.idade) // continua 21 por causa do Object.freeze()

// Mark: defineProperty
function Produto(nome, preco, estoque){
    //variaveis publicas
    this.nome = nome
    this.preco = preco

    //variaveis privadas
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false 
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
        }
        //outro atributo
    })

}

const produto = new Produto('Camisa', 34.90, 4)
delete produto.estoque // nao funciona
console.log(produto)
console.log(Object.keys(produto))


// MARK: Métodos Úteis para Objetos

// Object.keys()
// Object.values()
// Object.entries()

// {... nomeObjeto}
// Object.assign({}, objeto, {key:'value'})
// Object.freeze()
// getOwnPropertyDescriptor(objeto, 'atributo') -> nos retorna a propriedade de um atributo

// defineProperty(objeto, 'atributo', {
//  writable: false ...   
// }) -> nos retorna a propriedade de um atributo