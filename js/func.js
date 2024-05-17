var span = document.getElementsByClassName('search');
var input = document.getElementById('search');

function search() {
    input.style.display = 'normal';
}
span.addEventListener('click', search);