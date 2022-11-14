let start = document.querySelector('#start'),
stop = document.querySelector('#stop');
let wMinute,
wSec,
wTime, bTime,
bMin,
bSec;


let interval;
start.addEventListener('click', timer);

stop.addEventListener('click', function() {
    clearInterval(interval)
});

function timer () {
    interval = setInterval(remaingTime, 1000);
    wMinute = document.getElementById('w-min').value || 25;
    wSec = document.getElementById('w-sec').value || 00;
    bMin = document.getElementById('b-min').value || 5;
    bSec = document.getElementById('b-sec').value || 00;
     
    
    wTime = +wMinute * 60 + +wSec;  
    bTime = +bMin * 60 + +bSec;
    let time = wTime;
        function remaingTime() {
        let breakCount = 0;  
        
        let minute = Math.trunc(time / 60);
        let sec = time % 60;
            minute = minute.toString().length < 2 ? "0" + minute : minute;
            sec = sec.toString().length < 2 ? "0" + sec : sec;
    
        document.getElementById("timer").innerHTML = `${minute}:${sec}`; 
        time --;
            if (time === 00) {
                if (breakCount % 2 === 0){
                    time = bTime;   
                    breakCount ++;
                } 
                else{
                    time = wTime;
                    breakCount ++;
                }
            }
        }}