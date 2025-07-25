
//owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        margin:10,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            700:{
                items:3
            }
        }
    });
});

const items = document.querySelectorAll('.process__accordion');

function iniAccordions () {
    items.forEach((accordion, index) => {
        const body   = accordion.querySelector('.process__accordion-body');

        accordion.classList.remove('active');
        body.style.maxHeight = '0px';

        if (index === 0) {
            if (window.matchMedia('(min-width: 761px)').matches) {
                accordion.classList.add('active');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        }
    });
}

window.addEventListener('DOMContentLoaded',iniAccordions);

window.addEventListener('resize',iniAccordions);

items.forEach(accordion => {
    const header = accordion.querySelector('.process__accordion-header');
    const body   = accordion.querySelector('.process__accordion-body');

    header.addEventListener('click', () => {
        accordion.classList.toggle('active');
        if (accordion.classList.contains('active')) {
        body.style.maxHeight = body.scrollHeight + 'px';
        } else {
        body.style.maxHeight = '0px';
        }
    });
});