function Produtos(nome, preco, estoque){
    //variaveis publicas
    this.nome = nome
    this.preco = preco

    //variaveis privadas
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){ //exibir valor e mais nada
            return estoquePrivado
        },
        set: function(valor){ //modifica o valor
            if(typeof valor !== 'number') {
                throw new TypeError('Estoque é do tipo número')
            }
            estoquePrivado = valor 
        }

    })

}

const produtos = new Produtos('Camisa', 34.90, 4)
produtos.estoque = 56
console.log(produtos.estoque)




