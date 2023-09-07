/*

Consegna:
Riprendiamo il live coding visto in classe un pó di tempo fá sul carosello di immagini e rifacciamolo :gatto_che_urla:, questa volta usando gli oggetti.
:boolean-hug: Potete prendere come riferimento il codice scritto insieme nel live, che troverete direttamente nella mia repository di github a questo link: [https://github.com/fabiopacifici/104_js/tree/main/live_slider]
Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto di un array di stringhe.
Bonus 0:
Non eramamo ancora a conoscenda di molti strumenti utili, come ad esempio le funzioni. É possibile fare refactoring del codice, pulendolo e creando quanche funzione che possa rendere tutto piú leggibile e pulito?
Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

*/


const carousel = [
    {
        link: './assets/img/01.webp',
        status: 'active'

    },
    {
        link: './assets/img/02.webp',
        status: 'hiden'

    },
    {
        link: './assets/img/03.webp',
        status: 'hidden'

    },
    {
        link: './assets/img/04.webp',
        status: 'hidden'

    },
    {
        link: './assets/img/05.webp',
        status: 'hidden'

    }
];

const slideMarkup = document.querySelector('.image');

const previousElement = document.querySelector('.previous');
const nextElement = document.querySelector('.next');
let activeSlide = 0;


function generateCrousel(carousel) {
    for (let i = 0; i < carousel.length; i++) {
        const imgLink = carousel[i].link;
        console.log(imgLink);

        const imgElementMarkup = `<img class="img-fluid ${activeSlide == i ? 'active' : ''} rounded-2 object-fit-contain" src="${carousel[i].link}" alt="" srcset="">`;
        slideMarkup.innerHTML += imgElementMarkup;
    }
}
generateCrousel(carousel);

const carouselSlidesHTML = document.querySelectorAll('img');

nextElement.addEventListener('click', nextSlide);


function nextSlide() {
    console.log(activeSlide);
    console.log(carouselSlidesHTML[activeSlide]);

    carouselSlidesHTML[activeSlide].classList.remove('active');

    activeSlide++; // successiva slide

    if (activeSlide === carousel.length) {
        activeSlide = 0;
    }

    console.log(activeSlide);
    console.log(carouselSlidesHTML[activeSlide]);
    carouselSlidesHTML[activeSlide].classList.add('active');

}

previousElement.addEventListener('click', prevSlide);

function prevSlide() {

    carouselSlidesHTML[activeSlide].classList.remove('active');

    if (activeSlide === 0) {
        activeSlide = carousel.length
    }
    activeSlide--

    carouselSlidesHTML[activeSlide].classList.add('active');
}


const playCarouselButton = document.querySelector('.play');
const stopCarouselButton = document.querySelector('.stop');
console.log(playCarouselButton, stopCarouselButton);
playCarouselButton.addEventListener('click', function () {

    const carouselPlayer = setInterval(nextSlide, 3000);

    playCarouselButton.classList.add('d-none');
    playCarouselButton.classList.remove('d-inline-block');
    stopCarouselButton.classList.remove('d-none');
    stopCarouselButton.classList.add('d-inline-block');

    stopCarouselButton.addEventListener('click', function () {

        stopCarouselButton.classList.add('d-none');
        stopCarouselButton.classList.remove('d-inline-block');
        playCarouselButton.classList.remove('d-none');
        playCarouselButton.classList.add('d-inline-block');


        clearInterval(carouselPlayer);

        console.log(activeSlide);
        // activeSlide = 0;
        console.log(activeSlide);

        resetSlide(activeSlide, carouselSlidesHTML);
    })

})


function resetSlide(index, carouselArray){
    carouselArray[index].classList.remove('active');
    index = 0
    carouselArray[index].classList.add('active');
}


