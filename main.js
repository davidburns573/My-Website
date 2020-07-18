var i = 0;
var txt = 'Hello, nice to meet you!';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function mailClick() {
    window.location.href='mailto:dburns37@gatech.edu';
}