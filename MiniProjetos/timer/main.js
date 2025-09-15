function initial(){
    const clock = document.querySelector('.relogio')
    let seconds = 0
    let timer;
    

    function getTimeSeconds(seconds){
        const data = new Date(seconds*1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
document.addEventListener('click', function(event){
    console.log(event.target)
    const el = event.target;

    if(el.classList.contains('pause')){
        clearInterval(timer)
    }
    
    if(el.classList.contains('restart')){
        clearInterval(timer)
        clock.innerHTML = '00:00:00'
        seconds = 0
    }

    if(el.classList.contains('start')){
        clearInterval(timer)
        timer = setInterval(function(){
            seconds++
            clock.innerHTML = getTimeSeconds(seconds)
        }, 1000)
    }
})
}

initial()