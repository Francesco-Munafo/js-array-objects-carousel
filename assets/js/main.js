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
        link: './assets.img/01.webp',
        status: 'active'

    },
    {
        link: './assets.img/02.webp',
        status: 'hidden'

    },
    {
        link: './assets.img/03.webp',
        status: 'hidden'

    },
    {
        link: './assets.img/04.webp',
        status: 'hidden'

    },
    {
        link: './assets.img/05.webp',
        status: 'hidden'

    },
]

const imgDomElement = document.querySelector('.image');
const previousDomElement = document.querySelector('.previous');
const nextElement = document.querySelector('.next');



nextElement.addEventListener('click', function () {

    carousel.forEach((image, index, array) => {
        if (image.status === 'active') {
            image.status = 'hidden'
        }
        array[index + 1].status = 'active'
        if (image.status === 'active'){
            slide
        }


    });
})