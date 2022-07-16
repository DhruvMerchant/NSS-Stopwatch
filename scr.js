const timer = document.querySelector('.stopwatch .first h1');
const start = document.getElementById('start');
const stopp = document.getElementById('stop');
const reset = document.getElementById('reset');
let millisec=0;
let interval=null;
function stopwatch(){
    millisec++;
    let m = Math.floor(millisec/6000);
    let s = Math.floor(millisec/100)%60;
    let ms = millisec % 100;
    if(m<10){
      m = '0' + m;
    }
    if(s<10){
      s = '0' + s;
    }
    // if(millisec==100){
    //   alert('1 seconds up');
    // }
    if(ms<10){
      ms = '0' + ms;
    }
    // if(mil<10){
    //   mil = '0' + mil;
    // }
    

    timer.innerText = `${m} : ${s} : ${ms}`;
}

function start_timer(){
    if(interval){
        return;
        }
    interval = setInterval(stopwatch,10);
}

function stop_timer(){
    clearInterval(interval);
    interval = null;
}

function reset_timer(){
    stop_timer();
    millisec=0;
    timer.innerText = '00 : 00 : 00';
}
start.addEventListener('click', start_timer);
stopp.addEventListener('click',stop_timer);
reset.addEventListener('click',reset_timer);
