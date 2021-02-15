'use strict';

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

const p = document.querySelectorAll('p');
console.log(p);

// const script = document.createElement('script');
// script.src = "js/test.js";
// script.async = false;
// document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    // script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('start');
//         console.log(e.targetTouches);
//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX);
//     });
// });
//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();

//         console.log('end');
//     });

//     box.addEventListener('touchenter', (e) => {
//         e.preventDefault();

//         console.log('enter');
//     });
// });

// touches