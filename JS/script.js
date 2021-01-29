'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies you had seen?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies you had seen?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies:{}, 
    actors:{},
    genres:[],
    private: false
};

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("One of the recently seen fims?", ""),
//               b = prompt("Please rate it", "From 0 to 10");
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Too little');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Classic');
    } else if (personalMovieDB.count >= 30) {
        console.log('Cineman');
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

// console.log(personalMovieDB);

// function checkPrivate() {
//     if (personalMovieDB.private == false) {
//         console.log(personalMovieDB);
//         console.log('pidari');

//     } else {
//         console.log('error');
//         console.log('pidari');
//     }
// }

// checkPrivate();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre under the number ${i}`, "");
    }
}

writeYourGenres();

// function writeYourGenres() {
   
//     for (let i = 0; i < 3; i++) {
//         const a = prompt(`Your favourite genre under the number ${i+1}`, "");
//         if (a != null && a != '' && a.length < 50) {
//             personalMovieDB.genres[i] = a;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// writeYourGenres();


// let i = 0;
// while (i < 3) {
//     let a = prompt("One of the recently seen fims?", ""),
//         b = prompt("Please rate it", "From 0 to 10");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//     }
//     i++;
// }   

// let i = 0;
// do {
//     const a = prompt("One of the recently seen fims?", ""),
//           b = prompt("Please rate it", "From 0 to 10");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2);