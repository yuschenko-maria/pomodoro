let start = document.querySelector('#start'),
stop = document.querySelector('#stop');

let wMinute = 24;
let wSec = 59;
document.querySelector('.w-input').addEventListener('click', function (){
    wMinute = document.getElementById('w-min').value;
    wSec = document.getElementById('w-sec').value;
});

let bMin = 4;
let bSec = 59;
document.querySelector('.b-input').addEventListener('click', function (){
    bMin = document.getElementById('b-min').value;
    bSec = document.getElementById('b-sec').value;
});

let interval;
start.addEventListener('click', timer);
stop.addEventListener('click', function() {
    clearInterval(interval)})

function timer () {
    
interval = setInterval(remaingTime, 1000);
    function remaingTime() {
        wMinute = wMinute.toString().length < 2 ? "0" + wMinute : wMinute;
        wSec = wSec.toString().length < 2 ? "0" + wSec : wSec;

    document.getElementById("timer").innerHTML = `${wMinute}:${wSec}`; 
        wSec -=1;
        if (wSec === 00) {
            wMinute -=1;
            wSec = 59;
            if (wMinute === 00) {
                wMinute = bMin;
                wSec = bSec;
            } 
        }
    }
}