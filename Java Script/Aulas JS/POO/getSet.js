const _velocidade = Symbol('velocidade')

class Carro {
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    //atributos privados
    get velocidade(){ //acessar 
        return this[_velocidade]
    }

    set velocidade(valor){ //atribuir
        if(typeof valor !== 'number')return
        if(valor >= 100 || valor<=0 )return
        this[_velocidade] = valor
    }

    //metodos
    acelerar(){
        if(this[_velocidade] >= 100)return
        this[_velocidade]++
    }

    freiar(){
        if(this[_velocidade] <= 0)return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')
// for(let i=0; i<0;i++){
//     c1.acelerar()

// }
c1.acelerar()
console.log(c1.velocidade)
c1.velocidade = 9
c1.acelerar()
console.log(c1.velocidade)