class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        //metodo
    }
}

const pessoa1 = new Pessoa('Luis', 'Oliver')

// copiar um objeto -> const outroObjeto = {... nomeObjeto}

const outrapessoa = {
    ... pessoa1,
    religiao: 'budismo'
}

console.log(pessoa1, outrapessoa, Pessoa)