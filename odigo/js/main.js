(function(){
    const header = document.querySelector('.header');
    const wrapper = document.querySelector('.header_wrapper');

    window.onscroll = () => {
        if (window.pageYOffset >= 50 ) {
            header.classList.add('header_active');
            wrapper.classList.add('header_wrapper_active');
        }else {
            header.classList.remove('header_active');
            wrapper.classList.remove('header_wrapper_active');
        }
    }
}());


//burger handler
(function (){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header-nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    const header = document.querySelector('.header');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
        header.classList.add('header_active_bg');
    })

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
        header.classList.remove('header_active_bg');
    })

    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++){
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_nav_active');
                header.classList.remove('header_active_bg');
            })
        }
    }
}());

//scroll
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

//animate button
(function () {
let animateButton = function(e) {

    e.preventDefault();
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
    e.target.classList.remove('animate');
    },700);
};

let bubblyButtons = document.getElementsByClassName("search-form_button");

for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
}());