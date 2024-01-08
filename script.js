function updateTime() {
    var now = new Date();
    var hr = now.getHours();
    var mins = now.getMinutes();
    var sec = now.getSeconds();

    // Add leading zero if needed
    hr = (hours < 10) ? "0" + hours : hours;
    mins = (minutes < 10) ? "0" + minutes : minutes;
    sec = (seconds < 10) ? "0" + seconds : seconds;

    hr.textContent=hr;
    mins.textContent=mins;
    sec.textContent=sec;
}

// Update time every second
setInterval(updateTime, 1000);