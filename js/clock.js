document.getElementById('btn-moon').onclick = darkMode;
document.getElementById('btn-light').onclick = lightMode;


function darkMode() {
    // changing body class
    document.getElementById("main-container").
        setAttribute('class', 'container_night');
    
    // changing header and footer
    document.getElementById("header").
        setAttribute('class', 'header_night');
    document.getElementById("footer").
        setAttribute('class', 'footer_night');

    // changing clock elements
    document.getElementById("clock-container").
        setAttribute('class', 'container__clock__night');
    document.getElementById("hour").
        setAttribute('class', 'container__clock__night--elements');
    document.getElementById("separation-hour").
        setAttribute('class', 'container__clock__night--elements');
    document.getElementById("minute").
        setAttribute('class', 'container__clock__night--elements'); 
    document.getElementById("separation-minute").
        setAttribute('class', 'container__clock__night--elements');
    document.getElementById("second").
        setAttribute('class', 'container__clock__night--elements');   
}
function lightMode() {
    // changing body class
    document.getElementById("main-container").
        setAttribute('class', 'container');
    
    // changing header and footer
    document.getElementById("header").
        setAttribute('class', 'header');
    document.getElementById("footer").
        setAttribute('class', 'footer');

    // changing clock elements
    document.getElementById("clock-container").
        setAttribute('class', 'container__clock');
    document.getElementById("hour").
        setAttribute('class', 'container__clock--elements');
    document.getElementById("separation-hour").
        setAttribute('class', 'container__clock--elements');
    document.getElementById("minute").
        setAttribute('class', 'container__clock--elements'); 
    document.getElementById("separation-minute").
        setAttribute('class', 'container__clock--elements');
    document.getElementById("second").
        setAttribute('class', 'container__clock--elements');   
}
function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 -23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var ampm = "";

    ampm = (h < 13) ? "AM": "PM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
    }

    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;

    var time = h + ":" + m + ":" + s + " " + ampm;
    document.getElementById("hour").innerText = h;
    document.getElementById("hour").textContent = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("minute").textContent = m;
    document.getElementById("second").innerText = s;
    document.getElementById("second").textContent = s;

    setTimeout(showTime, 1000);
}
showTime();
    