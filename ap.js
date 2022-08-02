var min = 0;
var sec = 0;
var msec= 0;

var star =0

var minheading = document.getElementById('min');

var secheading = document.getElementById('sec');

var msecheading = document.getElementById('msec');

var interval

function timer() {

    msec++
    if(msec>=100)
    {
        msec=0
        sec++
    }
    if(sec>=60)
    {
        sec=0
        min++
    }
    msecheading.innerHTML = msec
    secheading.innerHTML = sec
    minheading.innerHTML =min
}

function start(){

    star++
    if(star<=1){
    interval = setInterval(timer,10);
   
    
}
}

function stop()
{
    clearInterval(interval)
    star = 0
}

function reset()
{
    min =0
    sec=0
    msec=0
    minheading.innerHTML =min
    secheading.innerHTML = sec
    msecheading.innerHTML = msec
    star = 0

    stop()
}

