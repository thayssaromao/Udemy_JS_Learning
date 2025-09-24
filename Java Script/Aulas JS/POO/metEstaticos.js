// Voce pode acessar metodos estaticos na classe sem instanciar eles
class ControleRem{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    //metodo instancia
    aumentarVolume(){}

    //metodo estatico
    static trocaPilha(){
        console.log('trocando pilha')
    }

}

ControleRem.trocaPilha() //nao precisa instanciar um objeto 

const controle1 = new ControleRem('LG')
console.log(controle1)
