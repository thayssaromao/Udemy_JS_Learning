try{
    console.log(naoDefinido)
} catch(err) {
    console.log('variavel nao definida')
    console.log(err)
}//tratamento de erro COM TRY E CATCH


function soma(x,y){
    if(typeof x!== 'number')
    {
        throw('x precisa ser número')
    }
    return x+y
} //tratamento de erro com THROW
console.log(soma('1',3))

