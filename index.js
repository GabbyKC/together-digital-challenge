// slider component
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num) {
    showSlides(slideIndex += num);
}

function showSlides(num) {
    let i;
    let slides = document.getElementsByClassName('quoteSlides');
    let steps = document.getElementsByClassName('slider-step');

    if (num > slides.length) {
        slideIndex = 1
    }

    if (num < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < steps.length; i++) {
        steps[i].className = steps[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    steps[slideIndex - 1].className += ' active ';
}

// collapse component
let collapse = document.getElementsByClassName('collapsible-button');
let i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function() {
        let content = this.nextElementSibling;
        let collapseIcon = this.querySelector('.collapse-icon');
        if (content.style.display === 'block') {
            content.style.display = 'none';
            collapseIcon.src = 'assets/img/open.svg'
        } else {
            content.style.display = 'block';
            collapseIcon.src = 'assets/img/close.svg'
        }
    });
}