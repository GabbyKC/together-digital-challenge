const testimonials = document.getElementsByClassName('js-testimonial-slides');
const steps = document.getElementsByClassName('testimonial-step');
const faqButtons = document.getElementsByClassName('collapsible-button');

let currentTestimonialIndex = 1;
showTestimonial(currentTestimonialIndex);
setupFaqEventListener();

function plusTestimonials(num) {
    let targetIndex = currentTestimonialIndex += num;
    showTestimonial(targetIndex);
}

function showTestimonial(index) {
    if (index > testimonials.length) {
        currentTestimonialIndex = 1
    }

    if (index < 1) {
        currentTestimonialIndex = testimonials.length
    }

    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = 'none';
    }

    for (let i = 0; i < steps.length; i++) {
        steps[i].className = steps[i].className.replace(' active', '');
    }
    testimonials[currentTestimonialIndex - 1].style.display = 'block';
    steps[currentTestimonialIndex - 1].className += ' active ';
}

function setupFaqEventListener() {
    for (let i = 0; i < faqButtons.length; i++) {
        faqButtons[i].addEventListener('click', function() {
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
}
