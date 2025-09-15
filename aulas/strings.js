// MARK: Strings
let barraInvertida = "aspas duplas \"escape\""
exercicio1 = barraInvertida[7]
exercicio2 = barraInvertida.indexOf('a', 5)
exercicio3 = barraInvertida.replace(/a/g, 'i')
exercicio4 = barraInvertida.slice(-6, barraInvertida.length-1)
exercicio5 = barraInvertida.split(' ')

console.log(exercicio1, exercicio2, exercicio3,exercicio4, exercicio5)
 
for (let index = 0; index < barraInvertida.length; index++) {
    const element = barraInvertida[index];
}

const name = "luiz"
const weight = 45.5
const height = 1.80
let imc = weight/(Math.round(Math.pow(height,2)))

//template string
console.log(name, "tem ",weight,"Kg e mede",height,"seu imc é:", imc)
console.log(`${name} tem ${weight} Kg e mede ${height} seu imc é: ${parseInt(imc) }`)


// OBHETO MATH
console.log(Math.round(Math.random()*(10 - 5)))