const paragrafos = document.querySelector('.paragrafos')
//apenas retorna um único elemento, neste caso
// o primeiro elemento de 'paragrafos'encontrado
const todosParagrafos = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody)

for (let p of todosParagrafos){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#FFF'
}
