// Metodos podem se comportar de formas diferentes

// Método Sobre Escrita

//CLASSE PAI (SUPERCLASSE)
function Conta(agencia, conta, saldo){
    this.conta = conta
    this.agencia = agencia
    this.saldo = saldo

}

function ContaCorrente(agencia,conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente


//polimorfismo sem sobre escrever
function ContaPoupanca(agencia,conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log('saldo insuficiente')
        
        return
    }
    console.log(`sacado ${valor}`)
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta}` + 
    ` | saldo: ${this.saldo}`)
}

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor){
        console.log('saldo e limite insuficiente')
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

const contaC = new ContaCorrente(33,1233,1500,1000)
contaC.sacar(2000)