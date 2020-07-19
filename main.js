var i = 0;
var txt = 'Nice to meet you!';
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

function about() {
    var element = document.getElementById("aboutline");
    element.parentNode.removeChild(element);
    document.getElementById("aboutgroup").appendChild(element);
}

function projects() {
    var element = document.getElementById("projectsline");
    element.parentNode.removeChild(element);
    document.getElementById("projectsgroup").appendChild(element);
}

function involvement() {
    var element = document.getElementById("involvementline");
    element.parentNode.removeChild(element);
    document.getElementById("involvementgroup").appendChild(element);
}

function contact() {
    var element = document.getElementById("contactline");
    element.parentNode.removeChild(element);
    document.getElementById("contactgroup").appendChild(element);
}