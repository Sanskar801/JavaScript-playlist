const endDate = new Date("29 Jun, 2025 22:40:00").getTime();
const startDate = new Date().getTime();
const totalDist = endDate - startDate;


function updateTimer() {
    const currTime = new Date().getTime();

    const distCovered = currTime - startDate;
    const distRemaining = endDate - currTime;

    // calculate time

    const days = Math.floor(distRemaining / (24*60*60*1000));
    const hours = Math.floor((distRemaining % (24*60*60*1000)) 
    / (60*60*1000));
    const mins = Math.floor((distRemaining % (60*60*1000))
    / (60*1000));
    const secs = Math.floor((distRemaining % (60*1000)) / 1000);

    // Populating in UI

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML= mins;
    document.getElementById("seconds").innerHTML= secs;

    // Progress bar
    const progress = (distCovered / totalDist) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

}

setInterval(updateTimer, 1000);

