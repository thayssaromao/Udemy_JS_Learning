// 70848445052
// 07098772003

//logica: multiplica cada digito do cpf por 10,9,8,7,6,5,4,3,2 respectivamente
//70848445052 => 7x10, 0x9, 8x8....0x2 (ultimos dois digitos nao entram nessa parte)

//Checar se o CPF tem todos os dígitos iguais (ex: "11111111111" é inválido).

function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,

        get: function(){  
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0,-2) //calcula os primeiros nove dígitos
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial+digito1)

    const novoCpf = cpfParcial + digito1 + digito2

    return novoCpf === this.cpfLimpo
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){

    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length+1
    const totalMult = cpfArray.reduce((ac,valor) => {
        ac += (regressivo* Number(valor))
        regressivo --
        return ac
    },0)

    const digito = 11 - (totalMult % 11)
    // console.log(digito, totalMult)
    return digito > 9 ? 0 : String(digito)
}

ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo 
}

// const cpf = new ValidaCpf('111.111.111-11')
// console.log(cpf.valida())

