const hours = document.getElementById("Hour");
const minutes = document.getElementById("Minute");
const seconds = document.getElementById("Second");
const timePeriod = document.getElementById("Am-Pm");

const updateClock  = ()=> {
   
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let amPm = "AM"
   

    if (h > 12) {
        h = h - 12
        amPm = "PM"               
    }

    h = h < 10 ? "0" + h  : h;
    m = m < 10 ? "0" + m  : m;
    s = s < 10 ? "0" + s  : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    setInterval(updateClock, 1000);

}

updateClock();








