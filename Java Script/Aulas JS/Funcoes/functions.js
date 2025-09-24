//ESCOPO LÉXICO -> Funções aninhadas podem acessar variáveis
// declaradas nos escopos "pais" (mais externos) devido a essa
// estrutura aninhada, que é reconhecida no momento da escrita
// do código, não da execução. 


//arrow function 
const raiz = n => n** 0.5

const dateFunction = function() {
    console.log("funcao como um dado")
}
dateFunction()

// MARK: Função Fábrica, Função Construtora -> retorna objeto literal

function criaPessoa(nome, sobrenome, idade, altura, peso){
    return{
        nome, 
        sobrenome,
        idade,
        altura,
        peso,
        get imc() { //getter
            return this.peso / (this.altura ** 2)
        }
    }
}
const pessoa1 = criaPessoa('amanda', 'silva',6, 1.90, 68)
console.log(pessoa1.imc)

// Mark: Objetos
const Pessoa = {
    nome: "amandha",
    idade: 10,
    fala (){console.log(`meu nome eh ${this.nome}`)}
};

console.log(Pessoa.nome, Pessoa.idade, Pessoa.fala())
//funcao em js é de primeira classe, podemos passar uma funçao
// como parametro de uma funçao


//MARK: Parametros
function funcao (...args){
    console.log(arguments)
    console.log(args)//rest operator
}
funcao('argumento', 1, 0, '33')


