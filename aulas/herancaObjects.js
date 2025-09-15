function Tablets(marca, preco){
    this.marca =marca
    this.preco=preco
}

Tablets.prototype.desconto = function(quantia){
    this.preco -=quantia
}
Tablets.prototype.aumento = function(quantia){
    this.preco +=quantia
}

function Ipad(marca, preco, cor){
    Tablets.call(this, marca, preco)
    this.cor = cor
}
Ipad.prototype = Object.create(Tablets.prototype) //linkando prototype dp pai
Ipad.prototype.constructor = Ipad // linkando o construtor do pai para o filho

const ipad = new Tablets('Ipad', 2150)
const ipad10 = new Ipad('Ipad 10', 2150,'preto')
ipad10.aumento(100)
console.log('chaves filho:',Object.keys(ipad10),'\nchaves pai:',Object.keys(ipad),'\n',ipad10)
