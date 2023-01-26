var gmt7 = document.getElementById("gmt7");
var gmt8 = document.getElementById("gmt8");

var offset7 = +7 * 60 * 60 * 1000;
var offset8 = +8 * 60 * 60 * 1000;

function updateTime() {
    fetch("https://worldtimeapi.org/api/timezone/Asia/Bangkok")
    .then(response => response.json())
    .then(data => {
        var datetime = data.datetime;
        var date = new Date(datetime);
        var gmt7Time = new Date(date.getTime() + offset7);

        var gmt7Hours = gmt7Time.getUTCHours();
        var gmt7Minutes = gmt7Time.getUTCMinutes();
        var gmt7Seconds = gmt7Time.getUTCSeconds();
        var gmt7AMPM = "AM";
        if (gmt7Hours > 12) {
            gmt7AMPM = "PM";
            gmt7Hours -= 12;
        }
        if (gmt7Hours === 0) {
            gmt7Hours = 12;
        }
        if (gmt7Minutes < 10) {
            gmt7Minutes = "0" + gmt7Minutes;
        }
        if (gmt7Seconds < 10) {
            gmt7Seconds = "0" + gmt7Seconds;
        }
        gmt7.innerHTML = "Thailand: " + gmt7Hours + ":" + gmt7Minutes + ":" + gmt7Seconds + " " + gmt7AMPM;
    });
    fetch("https://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur")
    .then(response => response.json())
    .then(data => {
        var datetime = data.datetime;
        var date = new Date(datetime);
        var gmt8Time = new Date(date.getTime() + offset8);

        var gmt8Hours = gmt8Time.getUTCHours();
        var gmt8Minutes = gmt8Time.getUTCMinutes();
var gmt8Seconds = gmt8Time.getUTCSeconds();
var gmt8AMPM = "AM";
if (gmt8Hours > 12) {
gmt8AMPM = "PM";
gmt8Hours -= 12;
}
if (gmt8Hours === 0) {
gmt8Hours = 12;
}
if (gmt8Minutes < 10) {
gmt8Minutes = "0" + gmt8Minutes;
}
if (gmt8Seconds < 10) {
gmt8Seconds = "0" + gmt8Seconds;
}
gmt8.innerHTML = "Malaysia: " + gmt8Hours + ":" + gmt8Minutes + ":" + gmt8Seconds + " " + gmt8AMPM;
});
}
setInterval(updateTime, 1000);
