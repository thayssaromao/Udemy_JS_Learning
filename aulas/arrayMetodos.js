//splice() -> Removes elements from an array and inserts new elements in their place, returning the deleted elements
//unshift() -> adiciona item no inicio do array
//shift() -> remove primeiro item do array
//push() -> adiciona item no final do array
//pop() -> remove ultimo item do array
//delete()  -> remove item from object
//split() -> Split a string into substrings using the specified separator and return them as an array.
//join()
//concat()
//filter()
//map() ->  percorre cada elemento de um array original e retorna um novo array com os resultados
//reduce(a, callback) -> It iterates over an array and reduces it to a single value, which can be a number, string, object, or even another array
//slice -> Returns a copy of a section of an array. For both start and end



// PRIMEIRO EXEMPLO (push, pop, shift, unshift, splice, delete)

// let estoque = ["Arroz", "Feijão", "Macarrão", "Açúcar"];
// estoque.push('Sal')
// console.log(estoque)
// estoque.shift()
// console.log(estoque)
// estoque.unshift('Farinha')
// console.log(estoque)
// estoque.splice(2,1)
// console.log(estoque)
// let retorno =estoque.splice(-2,1, 'Mascavo')
// console.log(estoque,`esse é o retorno`, retorno)


// SEGUNDO EXEMPLO (split, join, slice, map)

// let nomeCompleto = "Maria Fernanda de Souza Silva";
// let separado = nomeCompleto.split(' ')
// console.log(separado)

// let abreviado = separado.map((palavra, cont) => {
//     if(cont === 0 || cont === separado.length-1 ){
//         return palavra
//     }
//     else{
//         return palavra[0] + '.'
//     }

// }).join(" ")

// console.log(abreviado)

// console.log(separado.splice(-2))
// //let inverte = separado.reverse()  -> assim modifica o array original !
// let inverte = separado.slice().reverse()
// console.log(inverte, separado)  


// TERCEIRO EXEMPLO (filter, map, reduce)
// const numeros = [12, 5, 8, 130, 44, 7, 2];

// let maiores = numeros.filter(numero => numero > 10)
// let dobre = numeros.map(a => a*2)
// let total = numeros.reduce((ac, numero) => ac+=numero)
// let multiplica = numeros.reduce((acumulador, num )=> acumulador = acumulador * num)
// let media = numeros.reduce((ac, numero) => ac + numero)/(numeros.length)
// console.log(maiores,total, dobre, multiplica, media.toFixed(2))

// EXEMPLO QUATRO (concat, splice, slice)
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
const stackCompleta = frontend.concat(...backend)
const remove = frontend.splice(-2)
frontend.push('Type')
const newArray = frontend.splice(0,2).concat(backend.splice(-2))
console.log(stackCompleta, frontend, remove, newArray)
