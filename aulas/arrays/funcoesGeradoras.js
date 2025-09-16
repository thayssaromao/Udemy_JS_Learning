function* geradora1(){
    yield 'valor 1'; //tipo um return
    yield 'valor 2'; //tipo um return
    yield 'valor 3'; //tipo um return

}
const g1 = geradora1()
console.log(g1.next()) //objeto gerador
console.log(g1.next().value)
console.log(g1.next()) //done: true (acabou os valores)