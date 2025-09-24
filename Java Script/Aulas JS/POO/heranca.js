class Eletronico{
    constructor(nome){
    this.nome = nome
    this.ligado = false
    }


    ligar(){}

    desligar(){}
}

//classe que extende a classe Pai Eletronico (Herança)
class Celular extends Eletronico{
    constructor(nome, cor){
        // super construtor
        super(nome)
        this.cor = cor
    }
}
const d1 = new Eletronico('tablet')
const s1 = new Celular('iphone 13', 'amarelo')
console.log(d1, s1)