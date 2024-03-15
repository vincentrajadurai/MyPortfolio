const h = document.getElementById("hr");
const m = document.getElementById("min");
const s = document.getElementById("sec");
const ampmEl =document.getElementById("ampm");

function updateclock(){
let hrs = new Date().getHours()
let mins = new Date().getMinutes()
let secs = new Date().getSeconds()
let amp = "AM";

if ( hrs > 12){
    hrs = hrs - 12;
    amp = "PM";
}
hrs = hrs < 10 ? "0" + hrs : hrs;
secs = secs < 10 ? "0" + secs : secs;

h.innerText = hrs;
m.innerText = mins;
s.innerText = secs;
ampmEl.innerText = amp;


setTimeout(()=>{
    updateclock()
},1000)
}

updateclock();