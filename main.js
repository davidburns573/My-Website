var i = 0;
var txt = 'A Computer Scientist';
var speed = 20;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}