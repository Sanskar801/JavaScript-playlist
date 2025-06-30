const endDate = new Date("27 Jun, 2025 22:15:00").getTime();
const startDate = new Date().getTime();
const totalDist = endDate - startDate;




let interval = setInterval(function updateTimer() {
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

    if (distRemaining <= 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Expired";
    }

}, 1000);

