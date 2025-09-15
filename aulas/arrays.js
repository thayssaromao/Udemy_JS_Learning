// AULA 1
// let array = [4,5,'palavra',7]
// console.log(typeof array[2])
// array.push(66)
// array.unshift(9999) 
// console.log('antes',array)
// delete array[2]
// let removidos = array.pop()

// console.log('removidos',removidos)
// console.log('final',array)

// AULA 2
const numeros = [1,2,3,4]
// const numerosCopia = numeros
// const novoArray = [...numeros]
// novoArray.pop()
// numerosCopia.shift()
// console.log(numeros, numerosCopia,novoArray)


// AULA 3 SPLICE
const nomes = ['Maria', 'Lucas', 'Gonçalves', 'Mario']
// removidos = nomes.splice(1,2) //splice(indice, quantos elementos quero remover)
// console.log(nomes, removidos)
const filtro = nomes.filter(valor => valor[0] === 'M')
//console.log(filtro, nomes)


// MAP() -> Modifica o valor do array (valor copiado, nao o original)
const dobro = numeros.map(valor => valor+valor)
//console.log(numeros, dobro)

const pessoa = [

    {nome:'thay', idade:34, estudante:true},
    {nome:'jose', idade:36, estudante:false},
    {nome:'Lurdes', idade:106, estudante:false}

    
]
//const estudante = pessoa.map(obj => obj.nome)
const estudante = pessoa.map(function(obj){
    if (obj.estudante)return obj
    
})

const estudanteID = pessoa.map(function(obj,indice){
    const newObj = {...obj}
    newObj.id = indice
    return newObj
})
//console.log('pessoas:',pessoa,'\nestudantesID:',estudanteID)

const total = numeros.reduce(function(acumulador, valor) {
    if(valor %2 ===0) acumulador.push(valor)
    console.log(acumulador)
    return acumulador
}, [])
    
// console.log(numeros,total)
const maisVelha = pessoa.reduce(function(acumulador, valor){ //reduzir o array em um único elemento
    if(acumulador.idade > valor.idade) return acumulador;
    return valor  
})
console.log(maisVelha)