

let text = document.getElementById('woman');

window.addEventListener('scroll', function() {
    var value = scrollY;

    text.style.top = value * 0.15 + 'px';
})