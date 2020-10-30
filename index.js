// testimonial component
let testimonialIndex = 1;
showTestimonials(testimonialIndex);

function plusTestimonials(num) {
    showTestimonials(testimonialIndex += num);
}

function showTestimonials(num) {
    let i;
    let testimonials = document.getElementsByClassName('js-testimonial-slides');
    let steps = document.getElementsByClassName('testimonial-step');

    if (num > testimonials.length) {
        testimonialIndex = 1
    }

    if (num < 1) {
        testimonialIndex = testimonials.length
    }

    for (i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = 'none';
    }

    for (i = 0; i < steps.length; i++) {
        steps[i].className = steps[i].className.replace(' active', '');
    }
    testimonials[testimonialIndex - 1].style.display = 'block';
    steps[testimonialIndex - 1].className += ' active ';
}

// faq collapse component
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