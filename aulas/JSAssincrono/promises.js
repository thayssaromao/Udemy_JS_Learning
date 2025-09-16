//Promises em JavaScript são usadas para lidar com operações assíncronas, 
// ou seja, operações que não são concluídas imediatamente, como chamadas para servidores, leitura de arquivos, temporizadores, entre outros.

//A Promise permite que o código continue executando enquanto espera a resposta.

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string'){
            reject('valor incorret0') 
            return
        }
        setTimeout(() => {
            resolve(msg)

        }, tempo)
    })
} 

// Métodos úteis

//Promise.all -> array com todas as promessas
//Promise.race -> entrega a primeria promessa a ser resolvida
//Promise.resolve
//Promise.reject

const promises = [
    
    esperaAi('promise1',3000),
    esperaAi('promise2',5000),
    esperaAi('promise3',1000),
    'ultimo valor'
]

Promise.race(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })
