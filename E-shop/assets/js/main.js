async function init() {

    let countryMenu = document.getElementById('country-menu');
    let countryOptions = document.getElementById('country-options');
    let btnText = document.querySelector('.sBtn-text');

    let cityMenu = document.getElementById('city-menu');
    let cityOptions = document.getElementById('city-options');
    let cityBtnText = cityMenu.querySelector('.sBtn-text');

    let res = await fetch('./assets/js/city.json');
    const data = await res.json();

    function getCountries(){
        let html = '';

        for (let country in data){
            html += `<li class="option"><span class="option-text">${country}</span></li>`;
        }
        countryOptions.innerHTML = html;

        const firstCountry = Object.keys(data)[0];
        btnText.innerText = firstCountry;

        document.querySelectorAll('#country-options .option').forEach(option => {
            option.addEventListener('click', function (){
                const selectedCountry = this.querySelector('.option-text').innerText;
                btnText.innerText = selectedCountry;
                getCities(selectedCountry);
                getLoader();
                setTimeout(() => {
                    getLoader();
                    getCities(selectedCountry);
                }, 1000);
                countryMenu.classList.remove('active');
            });
        });
    }
    function getCities(country = '') {
        let html = '';
        if (!country) {
            country = Object.keys(data)[0];
        }
        cityBtnText.innerText = data[country][0];
        for (let city of data[country]) {
            html += `<li class="option"><span class="option-text">${city}</span></li>`;
        }
        cityOptions.innerHTML = html;
        document.querySelectorAll('#city-options .option').forEach(option => {
            option.addEventListener('click', function () {
            const selectedCity = this.querySelector('.option-text').innerText;
            cityBtnText.innerText = selectedCity;
            getLoader();
            setTimeout(() => {
                getLoader();
                getCities();
            }, 1000);
            cityMenu.classList.remove('active');
            });
        });
    }

    function getLoader() {
        document.getElementById('ajaxLoader').classList.toggle('fade');
    }

    getCountries();
    getCities();

    countryMenu.querySelector('.select-btn').addEventListener('click', () => {
        countryMenu.classList.toggle('active');	
    });

    cityMenu.querySelector('.select-btn').addEventListener('click', () => {
        cityMenu.classList.toggle('active');
    });

    document.addEventListener('click', function (e){
        const insideCountry = countryMenu.contains(e.target);
        const insideCity = cityMenu.contains(e.target);

        if (!insideCountry) {
            countryMenu.classList.remove('active');
        }
        if (!insideCity){
            cityMenu.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);


//flags for telephone
const input = document.querySelector('#phone');

if (input != null){
    window.intlTelInput(input,{
        initialCountry: "auto",
        geoIpLookup: callback => {
            fetch('https://ipapi.co/json')
            .then(res => res.json())
            .then(data => callback(data.country_code));
        },
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
    });
}


window.addEventListener('scroll',function(){
    document.getElementById('header-nav').classList.toggle('header-nav-scroll', window.scrollY > 130);
});

const offcanvasCartEl = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById('cart-open').addEventListener('click', (e) => {
    e.preventDefault();
    offcanvasCart.toggle();
});

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        offcanvasCart.hide();
        let href = item.dataset.href;
        console.log(href);
        document.getElementById(href).scrollIntoView();
    });
});

$(document).ready(function(){
    $(window).scroll(function (){
        if ($(this).scrollTop() > 300){
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });

    $('#top').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 300);
        return false;
    });

    $(".owl-carousel-full").owlCarousel({
        // loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            700:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

//form register
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();
