let modal = document.getElementById('m1-form');
let btn = document.getElementById('myBtn');
let close = document.getElementsByClassName('close-m1')[0];
let body = document.getElementById('body');
let wrapper = document.getElementById('all-wrapper');

btn.onclick = function() {
    modal.style.display = "block";
    body.classList.add("dark-bg");
    wrapper.classList.add("dark-bg");
};

close.onclick = function() {
    modal.style.display = "none";
    body.classList.remove("dark-bg");
    wrapper.classList.remove("dark-bg");
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.classList.remove("dark-bg");
        wrapper.classList.remove("dark-bg");
    }
};