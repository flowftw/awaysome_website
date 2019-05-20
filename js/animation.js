function animate() {
    var headerElement = document.getElementById("header");
    headerElement.style.visibility = 'visible';
    anime({
        targets: '.header path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
    });
}

window.onload = animate;