const Pessoa = {
    nome: 'Livia',
    sobrenome: 'Maria',
    idade: 22,
    endereco: {
        bairro: 'Jardim Botanico',
        cidade: 'Curitiba'
    }
};

for (let chave in Pessoa){
    //console.log(chave, Pessoa[chave])

} //leitura dos indices ou chaves do objeto

// ####################

const name = ['thay','gabi', 'livia']

for(let valor of name){
    console.log(valor)
} // retorna valores (Objetos não sao iteraveis)

// ####################

name.forEach(function(elemento, indice, array){
    console.log(elemento, indice, array)
})
