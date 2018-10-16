var randomWidth = 5000;
var randomBottom = 2000;

function animate(){
    var glitch = document.querySelector('.glitch');
    glitch.classList.remove('glitchit');
    void glitch.offsetWidth;
    glitch.classList.add('glitchit');
    clearInterval(timer);
    timer = setInterval(animate, parseInt(randomBottom + Math.random() * randomWidth));
}

var timer = setInterval(animate, randomBottom);