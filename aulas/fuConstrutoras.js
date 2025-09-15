// Funcoes construtoras é mais automatizada que funcao fabrica, retorna objetos
// Construtora -> Pessoa(New)
// Fabrica -> criaPessoa()
function Pessoa(nome, sobrenome){
    const ID = 12345
    const metodoInterno = function(){
        //validar cpf, funcao apenas existe aqui /privado/
    }
    //atributos ou metodos publicos
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.metodo = function(){
        console.log('metodo')
    }
}

const pessoa1 = new Pessoa('Luiz', 'Augusto')
// new cria um objeto vazio, this aponta para o objeto vazio
pessoa1.metodo()