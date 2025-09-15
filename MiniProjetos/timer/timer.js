// Capturar evento de clique
// const clock = document.querySelector('.relogio')
// // const start = document.querySelector('.start')
// // const pause = document.querySelector('.pause')
// // const restart = document.querySelector('.restart')
// let seconds = 0
// let timer;

// start.addEventListener('click', function(event){
//     clearInterval(timer)
//     // clock.classList.remove('pause')
//     startClock();
// });
// pause.addEventListener('click', function(event){pauseClock(timer)});
// restart.addEventListener('click', function(event){reStartClock(timer)});

// function getTimeSeconds(seconds){
//     const data = new Date(seconds*1000);
//     return data.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'UTC'
//     });
// }

// function startClock (){
    
//     timer = setInterval(function(){
//         seconds++
//         clock.innerHTML = getTimeSeconds(seconds)
//     }, 1000)
// }

//timer é uma variável global, se usar const timer criará um timer toda vez que chamar a funçao
// function reStartClock (timer){
//     clearInterval(timer)
//     clock.innerHTML = '00:00:00'
//     seconds = 0
// }

// function pauseClock (timer){
//     // alert('clique em pause');
//     // clock.innerHTML = 'clique em pause'
//     clearInterval(timer)
// }
