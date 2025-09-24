const Pessoa = {
    nome: 'Livia',
    sobrenome: 'Maria',
    idade: 22,
    endereco: {
        bairro: 'Jardim Botanico',
        cidade: 'Curitiba'
    }
};

//const {nome, idade, endereco} = Pessoa; //Atribuicao por desestruturaçao (Objeto)
// console.log(Pessoa.endereco.bairro, endereco.bairro, teste)
const {nome, ...infos} = Pessoa
console.log(nome, infos)