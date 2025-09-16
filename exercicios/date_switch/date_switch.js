
const h1 = document.querySelector('.container h1');
const data = new Date();

// const h2 = document.querySelector('.container h2')
// h.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle:'full', timeStyle:'short'});
let diaNumero = data.getDay();
let mesNumero = data.getMonth();

function getDiaName(numeroDia){
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
    'Quinta-feira', 'Sexta-feira', 'Sábado'];

    return dias[numeroDia]
}
// function getDiaName(numeroDia){
// switch (numeroDia){
// case 0:
//     diaSemanaTexto = 'Domingo';
//     return diaSemanaTexto;
//     case 1:
//     diaSemanaTexto = 'Segunda-feira';
//     return diaSemanaTexto;
//     case 2:
//     diaSemanaTexto = 'Terça-feira';
//     return diaSemanaTexto;
//     case 3:
//     diaSemanaTexto = 'Quarta-feira';
//     return diaSemanaTexto;
//     case 4:
//     diaSemanaTexto = 'Quinta-feira';
//     return diaSemanaTexto;
//     case 5:
//     diaSemanaTexto = 'Sexta-feira';
//     return diaSemanaTexto;
//     case 6:
//     diaSemanaTexto = 'Sábado';
//     return diaSemanaTexto;
// };}
function getMonthName(numeroMouth){
switch (numeroMouth){
    case 0:
        mesTexto = 'Janeiro';
        return mesTexto;
    case 2:
        mesTexto = 'Fevereiro';
        return mesTexto;
    case 3:
        mesTexto = 'Março';
        return mesTexto;
    case 4:
        mesTexto = 'Abril';
        return mesTexto;
    case 5:
        mesTexto = 'Maio';
        return mesTexto;
    case 6:
        mesTexto = 'Junho';
        return mesTexto;
    case 7:
        mesTexto = 'Julho';
        return mesTexto;
    case 8:
        mesTexto = 'Agosto';
        return mesTexto;
        
    case 9:
        mesTexto = 'Setembro';
        return mesTexto;
        case 10:
        mesTexto = 'Outubro';
        return mesTexto;
        case 11:
        mesTexto = 'Novembro';
        return mesTexto;
        case 12:
        mesTexto = 'Dezembro';
        return mesTexto;
    };}
function getDataComplete (){
const contatenacao = dia + ', ' + data.getDay() +
' de ' + mes + ' de ' + data.getFullYear() + ' ' 

return contatenacao
}
const dia = getDiaName(diaNumero)
const mes = getMonthName(mesNumero)
h1.innerHTML = getDataComplete()
console.log(getDataComplete(), dia)
