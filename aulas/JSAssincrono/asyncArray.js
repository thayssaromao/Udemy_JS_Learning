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
async function executa(){

    try {
        const fase1 = await esperaAi('fase 1', 1000)
        console.log(fase1)
        const fase2 = await esperaAi('fase 2', 1000)
        console.log(fase2)
        const fase3 = await esperaAi('fase 3', 1000)
        console.log(fase3)
    }catch(e) {
        console.log(e)
    }

}
executa()

// estado das promises - pending - fullfilled - rejected