
//owl carousel
$(document).ready(function(){
    const $slider = $(".reviews__slider").owlCarousel({
        items:1,
        loop: false,
        dots: false,
        nav: false,
        margin: 20,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    const $prevBtn = $('.reviews__actions .reviews__arrow-button').first();
    const $nextBtn = $('.reviews__actions .reviews__arrow-button').last();
    const $dots    = $('.reviews__pagination-item button');

    $prevBtn.on('click', () => $slider.trigger('prev.owl.carousel'));
    $nextBtn.on('click', () => $slider.trigger('next.owl.carousel'));

    $dots.each((i,btn) => {
        $(btn).on('click', () =>
            $slider.trigger('to.owl.carousel', [i,300])
        );
    });

    $slider.on('changed.owl.carousel', (e) => {
        const idx = e.item.index;
        $dots.removeClass('is-current').eq(idx).addClass('is-current');
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